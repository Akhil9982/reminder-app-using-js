document.addEventListener('DOMContentLoaded', () => {
  const stackContainer = document.getElementById('card-stack');
  const btnUp = document.getElementById('btn-up');
  const btnDown = document.getElementById('btn-down');
  const btnAdd = document.getElementById('btn-add');
  const modal = document.getElementById('add-modal');
  const btnCloseModal = document.getElementById('btn-close-modal');
  const addForm = document.getElementById('add-form');

  // 1. Initialize State
  let cardsArray = [];
  const initialCards = Array.from(stackContainer.querySelectorAll('.card'));

  // Sort initial DOM cards based on their hardcoded pos classes to establish the baseline array
  cardsArray = initialCards.sort((a, b) => {
    const getPos = (el) => {
      if (el.classList.contains('card-pos-1')) return 1;
      if (el.classList.contains('card-pos-2')) return 2;
      if (el.classList.contains('card-pos-3')) return 3;
      return 99;
    };
    return getPos(a) - getPos(b);
  });

  // 2. Core Rendering Function
  function updateCards() {
    cardsArray.forEach((card, index) => {
      // Strip all positional classes
      card.classList.remove('card-pos-1', 'card-pos-2', 'card-pos-3', 'card-hidden-up', 'card-hidden-down');

      // Re-apply based on current array index
      if (index === 0) {
        card.classList.add('card-pos-1');
      } else if (index === 1) {
        card.classList.add('card-pos-2');
      } else if (index === 2) {
        card.classList.add('card-pos-3');
      } else {
        // Any cards beyond the first 3 are pushed down and hidden
        card.classList.add('card-hidden-down');
      }
    });
  }

  // 3. Rotation Logic
  btnUp.addEventListener('click', () => {
    if (cardsArray.length <= 1) return;

    const frontCard = cardsArray.shift(); // Extract the current front card

    // Visual effect: slide the front card up and fade it out temporarily
    frontCard.classList.remove('card-pos-1');
    frontCard.classList.add('card-hidden-up');

    // Wait for the upward animation to trigger before moving it to the back
    setTimeout(() => {
      cardsArray.push(frontCard); // Push to the end of the array (the back of the stack)
      updateCards();              // Re-render positions
    }, 300); // 300ms leaves a snappy overlap with the 400ms CSS transition
  });

  btnDown.addEventListener('click', () => {
    if (cardsArray.length <= 1) return;

    const backCard = cardsArray.pop(); // Extract the back-most card
    cardsArray.unshift(backCard);      // Insert it at the front of the array

    updateCards();
  });

  // 4. Modal Toggles
  btnAdd.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });

  btnCloseModal.addEventListener('click', () => {
    modal.classList.add('hidden');
    addForm.reset();
  });

  // 5. Add New Card Logic
  addForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Extract form values
    const typeEl = addForm.querySelector('input[name="type"]:checked');
    const titleEl = addForm.querySelector('input[type="text"]');
    const dateEl = addForm.querySelector('input[type="datetime-local"]');

    const type = typeEl ? typeEl.value : 'reminder';
    const title = titleEl.value.trim() || 'Untitled';
    const rawDate = dateEl.value;

    // Format the date string
    let formattedDate = 'No date set';
    if (rawDate) {
      const d = new Date(rawDate);
      formattedDate = `Due: ${d.toLocaleDateString()} ${d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    }

    // Determine UI colors based on type
    let typeColorText = 'text-blue-500'; // Default Reminder
    let typeLabel = 'Reminder';
    
    if (type === 'call') {
      typeColorText = 'text-gray-500';
      typeLabel = 'Call';
    }

    // Construct the new DOM element
    const newCard = document.createElement('div');
    // Initialize it hidden above the stack so it animates dropping in
    newCard.className = 'card card-hidden-up absolute w-full h-full bg-white rounded-xl shadow-xl border border-gray-200 p-5 flex flex-col justify-between';
    
    newCard.innerHTML = `
      <div class="text-sm ${typeColorText} font-semibold">${typeLabel}</div>
      <div class="text-lg font-bold text-gray-800">${title}</div>
      <div class="text-xs text-gray-400">${formattedDate}</div>
    `;

    // Inject into DOM and array
    stackContainer.appendChild(newCard);
    cardsArray.unshift(newCard); // Add to the front

    // Force a micro-delay so the browser registers the initial 'card-hidden-up' state before transitioning to 'card-pos-1'
    setTimeout(() => {
      updateCards();
    }, 10);

    // Cleanup
    modal.classList.add('hidden');
    addForm.reset();
  });
});