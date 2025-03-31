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
      <h1 class="heading-main">Welcome.</h1>
    </div>
    <article class="content pb-20">
      <div class="main-content">
        <Projects/>
      </div>
    </article>
    <article class="content py-20  flex justify-center items-center">
      <div class="main-content my-10 text-center">
        <h3 class="text-3xl font-bold text-gray-900">Highlighter</h3>
        <div class="highlighted-content py-5  text-left">
         
          <div id="displayText" class="py-5">
            <p>
              Eastern cape is the second largest of South Africa's nine provinces.
            </p>
            <div class="offers-categorization text-left">
              <p>Eastern cape offers the following: </p>
              <ul>
                <li>snow skiing</li>
                <li>sunny beaches</li>
                <li>game researches</li>
                <li>fascinating history</li>
              </ul>
            </div>
          </div>
          <textarea id="readingText" class="text-[var(--color-dark-desaturated-blue)] hidden">Eastern cape is the second largest of South Africa's nine provinces. 
            Eastern cape offers the following: 
            snow skiing, 
            sunny beaches, 
            game researches, 
            fascinating history
          </textarea>
         
          <button 
            id="sidebar_read" 
            class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 rounded-md px-8"
            @click="readIntro"
          >
            Listen 
            <!-- <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2 h-5 w-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          </svg>
          </button>
        </div>
      </div>
    </article>
  </div>

</template>

<style lang="scss">
.landing {
  margin: 5em auto;
  width: 100%;
}

.heading-main {
  color: var(--color-very-dark-blue);
}
.title {
  color: var(--color-black-gray);
}

.highlighted {
  background-color: var(--color-aqua);
}

dialog::backdrop {
  background-color: #00000080; /* Semi-transparent black */
}
.close-dialog {
  color: var(--color-white);
}
</style>
