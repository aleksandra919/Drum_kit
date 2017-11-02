
  function playSound(e) {                                                                   
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);     
//Do stałej audio przypisz element audio posiadający atrybut "data-key" o wartości e.keycode.
//Właściwość keyCode zawiera wartość odpowiadającą wciśniętemu klawiszowi.                                
//zmienna const musi miec przypisana wartosc / let i const (stala-wartosc nie moze byc zmieniona) - zakres tych zmiennych to blok np instrukcja warunkowa if
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);  
//Do stałej keys przypisz klasę key posiadający atrybut "data-key" o wartości e.keycode.
//QuerySelector - zwraca pierwszy element ktory pasuje do podanego selektora
    if (!audio) return;                        
//zamyka jesli nie ma takiego kodu (klawisz nie jest zdefiniowany = nie ma przypisanej wartosci keyCode)
    audio.currentTime = 0;
//funkcja sprawiająca, że nie czekamy na zakończenie dźwięku, tylko ładuje się szybko od nowa, cofa do poczatku
    audio.play();                                                              
//odtwarzaj audio
    key.classList.add('playing');
  }

  
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;     //zatrzymuje funkcje                              
// e- zmienna reprezentujaca event(zdarzenie)
    e.target.classList.remove('playing');                                       
//targert wskazuje na obiekt ktory wyzwolil dana funkcje
// ALTERNATYWA :  this.classList.remove('playing');
  }

  const keys = Array.from(document.querySelectorAll('.key'));                 
//Array.from()  metoda tworzy nową instację tablicy z obiektu podobnego do tablicy lub obiektu iterowalnego.
  keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //jest kilka elementow z type:"transitionend", wybieramy jeden: propertyName transition'
//ALTERNATYWA: document.querySelector('.keys').addEventListener('transitionend', removeTransition);
  window.addEventListener('keydown', playSound); //czeka na zdarzenei keydown i odpala funkcje playSounds

