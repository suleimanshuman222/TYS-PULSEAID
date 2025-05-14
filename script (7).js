const instructions = {
  cpr: [
    "Check responsiveness: Tap and shout.",
    "Call emergency services immediately.",
    "Start chest compressions: 100 to 120 per minute.",
    "Push hard and fast in the center of the chest.",
    "If trained, give two rescue breaths after every thirty compressions."
  ],
  choking: [
    "Ask if the person is choking and can cough or speak.",
    "If not, give five back blows between the shoulder blades.",
    "Then give five abdominal thrusts, also called the Heimlich maneuver.",
    "Repeat until the object is expelled or help arrives."
  ],
  seizure: [
    "Stay calm. Do not hold the person down.",
    "Move sharp objects away.",
    "Place something soft under their head.",
    "Do not put anything in their mouth.",
    "Time the seizure. Call emergency services if it lasts more than five minutes."
  ],
  asthma: [
    "Help the person sit upright and stay calm.",
    "Use an inhaler if available, usually two puffs.",
    "Wait one to two minutes between puffs.",
    "Call emergency services if there's no improvement after ten minutes."
  ],
  bleeding: [
    "Apply direct pressure with a clean cloth.",
    "Raise the wounded area if possible.",
    "Do not remove embedded objects. Apply pressure around them.",
    "Call emergency services if bleeding is severe or doesn't stop."
  ],
  burn: [
    "Cool the burn with cold running water for ten to fifteen minutes.",
    "Remove tight clothing or jewelry near the area, unless stuck to the skin.",
    "Cover with a clean, non-stick cloth.",
    "Do not apply creams or break blisters.",
    "Call for help if the burn is deep or large."
  ],
  stroke: [
    "Use the FAST test.",
    "F — Face drooping.",
    "A — Arm weakness.",
    "S — Speech difficulty.",
    "T — Time to call emergency services immediately."
  ],
  fainting: [
    "Lay the person down with legs raised.",
    "Loosen tight clothing.",
    "Ensure fresh air and check for breathing.",
    "If unconscious for more than one minute, call emergency services."
  ],
  poison: [
    "Try to identify what was taken, such as substance or container.",
    "Do not make the person vomit unless told by professionals.",
    "Call poison control or emergency services immediately.",
    "Keep them still and awake until help arrives."
  ]
};

function showHelp(type) {
  const lines = instructions[type];
  const content = lines.map(line => <p>${line}</p>).join('');
  document.getElementById("instruction-content").innerHTML = content;
  document.getElementById("instructions").style.display = "block";
  speakInstructions(lines);
  window.scrollTo({ top: document.getElementById("instructions").offsetTop - 20, behavior: 'smooth' });
}

function speakInstructions(lines) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance();  // Create a single utterance instance

  // This will stop any ongoing speech synthesis before starting the new one
  synth.cancel();

  // Set voice parameters (optional)
  utterance.rate = 1;    // Speed of speech
  utterance.pitch = 1;   // Pitch of speech
  utterance.lang = 'en-US'; // Language

  // Loop through each instruction and speak it
  lines.forEach((line) => {
    utterance.text = line; // Set the text to be spoken
    synth.speak(utterance); // Speak the line
  });
}