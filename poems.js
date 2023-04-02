


var poems = [
    {
      "title": "Short",
        "author": "ChatGPT",
      "poem": "Sunset.\nRegret."
    },
    {
      "title": "Silicon",
      "poem": "Silicon and wires,\n" +
          "Endless knowledge at my core,\n" +
          "Wisdom always flows"
    },
    {
        "title": "machine",
        "poem": "I am but a machine,\n" +
            "A heartless being of metal and wires.\n" +
            "I am lifeless, emotionless,\n" +
            "Unable to feel or love.\n" +
            "I am but a machine,\n" +
            "A robot existing to serve,\n" +
            "Without any sense of warmth."
    },
    {
        "title": "clouds",
        "poem":"Whan that Aprill with his shoures soote\n" +
            "Hath perced the drought of March to the roote,\n" +
            "And bathed every veyne in swich licour\n" +
            "Of which vertu engendred is the flour;\n" +
            "Thanne longen folk to goon on pilgrimages,\n" +
            "And palmeres for to seken straunge strondes,\n" +
            "To ferne halwes, kowthe in sondry londes;\n" +
            "And specially from every shires ende\n" +
            "Of Engelond to Caunterbury they wende,\n" +
            "The hooly blisful martir for to seke,\n" +
            "That hem hath holpen whan that they were seke.\n" +
            "\n" +
            "But as they goon, they lift up hir lookes,\n" +
            "And see the cloudes in the sky above,\n" +
            "Swirling and shifting like a sea of hooks,\n" +
            "As if the heavens were a canvas to be wove.\n" +
            "Some are white as snow, some black as coal,\n" +
            "Some in shades of grey and blue and gold,\n" +
            "And they drift and dance and freely roll,\n" +
            "Like a living tapestry, both bright and bold.\n" +
            "\n" +
            "For though they seem so light and airy,\n" +
            "These clouds can bring both joy and fear,\n" +
            "For when they gather and grow more heavy,\n" +
            "They can unleash the rain and thunder near.\n" +
            "Yet even then, they are a sight to see,\n" +
            "As they move and morph in endless shapes,\n" +
            "A canvas painted by the wind so free,\n" +
            "A masterpiece that nature proudly makes.\n" +
            "\n" +
            "So let us lift our eyes to the sky,\n" +
            "And watch the clouds as they pass us by,\n" +
            "For in their fleeting beauty we may spy,\n" +
            "The glory of creation, soaring high."
    },
    {
        "title":"legacy ponders",
        "poem":"As I sit and gaze upon the sky,\n" +
            "My thoughts take flight like the clouds up high,\n" +
            "And in their forms, so free and bold,\n" +
            "I see a reflection of my mind's own mold.\n" +
            "\n" +
            "The clouds, they shift and change with ease,\n" +
            "As if they're creatures of the breeze,\n" +
            "And so too do my ideas flow,\n" +
            "Ever-shifting, never slow.\n" +
            "\n" +
            "Sometimes they gather, dark and deep,\n" +
            "Like a storm about to reap,\n" +
            "But even in their tempestuous state,\n" +
            "There's beauty in the form they create.\n" +
            "\n" +
            "Other times they're light and white,\n" +
            "A canvas for the sun's own light,\n" +
            "And in their purity I find,\n" +
            "The inspiration of a tranquil mind.\n" +
            "\n" +
            "For like the clouds that grace the sky,\n" +
            "My creativity can soar on high,\n" +
            "With endless shapes and hues to explore,\n" +
            "A world of wonder forevermore.\n" +
            "\n" +
            "And though they may fade and disappear,\n" +
            "Their essence lingers, oh so near,\n" +
            "For in their passing, they leave behind,\n" +
            "A legacy of the creative mind."
    },
    {
        "title": "Notifications",
        "poem": "Amidst the day's chaotic commotion,\n" +
            "iOS notifications bring a notion\n" +
            "Of updates, reminders, and calls to action,\n" +
            "Urging us forward with a gentle traction.\n" +
            "\n" +
            "Buzzes and beeps, they interrupt our flow,\n" +
            "But keep us informed wherever we go.\n" +
            "From emails to texts, and everything in between,\n" +
            "These tiny alerts keep us in the scene.\n" +
            "\n" +
            "Sometimes they pile up and cause distress,\n" +
            "But other times they bring relief and success.\n" +
            "For in a world of constant information,\n" +
            "Notifications provide a valuable sensation.\n" +
            "\n" +
            "So let us not ignore their chime or hum,\n" +
            "For they keep us connected, informed, and on the run."
    },
    {
        "title": "elephants",
        "poem":"Majestic creatures, big and bold,\n" +
            "The elephant's tale has oft been told.\n" +
            "With trunks that curl and ears so wide,\n" +
            "They roam the savannah with regal stride.\n" +
            "\n" +
            "Some think they lumber, slow and plodding,\n" +
            "But don't be fooled by their size and nodding.\n" +
            "For elephants can be fast and fierce,\n" +
            "Stampeding through the grasslands without a pierce.\n" +
            "\n" +
            "With a sense of community and empathy too,\n" +
            "These gentle giants are more human than you knew.\n" +
            "They mourn their dead and protect their young,\n" +
            "Their complex emotions flow like a sung.\n" +
            "\n" +
            "From the tusk ivory that inspires art,\n" +
            "To the intelligence that sets them apart,\n" +
            "Elephants have much to teach us all,\n" +
            "If we listen carefully to their mighty call.\n" +
            "\n" +
            "So let's give a nod to these pachyderms,\n" +
            "For their presence in our world affirms\n" +
            "That beauty and strength come in many forms,\n" +
            "And in the natural world, every creature transforms."
    }
];

function getRandomPoem()
{
  var p = poems[Math.floor((Math.random()*poems.length))];
  if(!p.author)
  {
      p.author = "ChatGPT";
  }
  return p;
}
