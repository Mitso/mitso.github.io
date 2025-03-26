<script setup>
import Projects from '../components/Projects/Projects.vue';
//https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance
import { ref, onMounted } from 'vue';
  const str = ref('');
  const words = ref([]);
  const currentWordIndex = ref(0);

  function readIntro(e) {
    let utterance = null;

    const textToRead = document.getElementById('textToRead');
    const readingText = document.getElementById('readingText');
    const displayText = document.getElementById('displayText');
    console.log(displayText.outerHTML)
    if (utterance && speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }
    str.value = readingText.textContent;
    words.value = str.value.split(/\s+/);

    highlightWord(currentWordIndex.value, words.value, displayText, str.value);
    
    utterance = new SpeechSynthesisUtterance(str.value);
    utterance.onboundary = (event) => {
      if (event.name === 'word') {
        currentWordIndex.value = words.value.indexOf(
          event.utterance.text.substring(event.charIndex, event.charIndex + event.charLength), 
          currentWordIndex.value
        );
        highlightWord(currentWordIndex.value, words.value, displayText, str.value);
      }
    };
    utterance.rate = 0.5;

    // utterance.onend = () => {
    //   resetHighlight(readingText, str.value);
    // };

    speechSynthesis.speak(utterance);
  }
  function highlightWord(index, content, elem, input) {
    //resetHighlight(elem, input);  
     
    if (index >= 0 && index < content.length) {
      const regex = new RegExp(`\\b${escapeRegExp(content[index])}\\b`, 'i'); //Exclude for now.

      console.log(index);
      console.log(content);
      console.log(elem.outerHTML);

      // const newText = elem.innerHTML.replace(content[index], `<span class="highlighted">${content[index]}</span>`);
      // elem.innerHTML = newText;
    }
  }

  function resetHighlight(elem, input) {
    elem.innerHTML = input;
  }

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

</script>

<template>
  
  <div class="landing" id="landing">
    <div class="intro text-center w-full">
      <h1 class="heading-main">Welcome to this website.</h1>
    </div>
    <div class="content">
      <div class="main-content">
        <Projects/>
      </div>

      <aside>
        <textarea id="readingText">Eastern cape is the second largest of South Africa's nine provinces. 
          Eastern cape offers the following: 
          snow skiing, 
          sunny beaches, 
          game researches, 
          fascinating history
        </textarea>
        <button 
          id="sidebar_read" 
          @click="readIntro"
        >
          Read Intro
        </button>

        <div id="displayText"><p>Eastern cape is the second largest of South Africa's nine provinces. </p>
          <div class="offers-categorization">
            <p>Eastern cape offers the following: </p>
            <ul>
              <li>snow skiing</li>
              <li>sunny beaches</li>
              <li>game researches</li>
              <li>fascinating history</li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  </div>

</template>

<style lang="scss">
  .landing {
    margin: 0 auto;
    width: 100%;
  }

  .highlighted {
    background-color: aqua;
  }

  dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
  }
  .close-dialog {
    color: #fff;
  }
</style>
