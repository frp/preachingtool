let allTriggerAnswersJSON = `[
{"Ich habe Hunger. (meines Hungers) - nichts essen" : ["Ich habe Hunger.", "Ich habe Hunger. Trotzdem esse ich nichts.", "Obwohl ich Hunger habe, esse ich nichts.", "Trotz meines Hungers, esse ich nichts."],
"Ich habe viel Geld. (meines vielen Geldes) - nicht glücklich sein" : ["Ich habe viel Geld.", "Ich habe viel Geld. Trotzdem bin ich nicht glücklich.", "Obwohl ich viel Geld habe, bin ich nicht glücklich.", "Trotz meines vielen Geldes, bin ich nicht glücklich."],
"Ich bin müde. (meiner Müdigkeit) - nicht ins Bett gehen" : ["Ich bin müde.", "Ich bin müde. Trotzdem gehe ich nicht ins Bett.", "Obwohl ich müde bin, gehe ich nicht ins Bett.", "Trotz meiner Müdigkeit, gehe ich nicht ins Bett."],
"Ich bin noch nicht alt. (meines niedrigen Alters) - graues Haar haben" : ["Ich bin nicht alt.", "Ich bin nicht alt. Trotzdem habe ich graues Haar.", "Obwohl ich noch nicht alt bin, habe ich graues Haar.", "Trotz meines niedrigen Alters, habe ich graues Haar."],
"Es ist kalt. (der Kälte) - kurze Hosen tragen" : ["Es ist kalt.", "Es ist kalt. Trotzdem trage ich kurze Hosen.", "Obwohl es kalt ist, trage ich kurze Hosen.", "Trotz der Kälte, trage ich kurze Hosen."],
"Er hat 10 Kilo abgenommen (=lost weight). (seines Gewichtsverlusts) - seine Frau verlässt ihn (=leaves)" : ["Er hat 10 Kilo abgenommen.", "Er hat 10 Kilo abgenommen. Trotzdem hat seine Frau ihn verlassen.", "Obwohl er 10 Kilo abgenommen hat, hat seine Frau ihn verlassen.", "Trotz seines Gewichtsverlustes, hat seine Frau ihn verlassen."],
"Sie ist intelligent. (ihrer Intelligenz) - sich immer in den falschen Mann verlieben (=fall in love)" : ["Sie ist intelligent.", "Sie ist intelligent. Trotzdem verliebt sie sich immer in den falschen Mann.", "Obwohl sie intelligent ist, verliebt sie sich immer in den falschen Mann.", "Trotz ihrer Intelligenz, verliebt sie sich immer in den falschen Mann."],
"Das neue Schreiphone ist sehr teuer. (=seines hohen Preises) - Viele Leute kaufen es." : ["Das neue Schreiphone ist sehr teuer.", "Das neue Schreiphone ist sehr teuer. Trotzdem kaufen es viele Leute.", "Obwohl das neue Schreiphone sehr teuer ist, kaufen es viele Leute.", "Trotz des hohen Preises, kaufen viele Leute das neue Schreiphone."],
"Die Musik ist nicht laut. (der niedrigen Lautstärke). - Sie stört mich." : ["Die Musik ist nicht laut.", "Die Musik ist nicht laut. Trotzdem stört sie mich.", "Obwohl die Musik nicht laut ist, stört sie mich.", "Trotz der niedrigen Lautstärke, stört mich die Musik."],
"Ich habe diesen Satz mehrmals gelesen. (mehrmaligen Lesens) - Ich verstehe ihn nicht." : ["Ich habe diesen Satz mehrmals gelesen.", "Ich habe diesen Satz mehrmals gelesen. Trotzdem verstehe ich ihn nicht.", "Obwohl ich diesen Satz mehrmals gelesen habe, verstehe ich ihn nicht.", "Trotz mehrmaligen Lesens, verstehe ich diesen Satz nicht."],
"Wir waren zu Hause. (unserer Anwesenheit) - Ein Dieb hat bei uns eingebrochen." : ["Wir waren zu Hause.", "Wir waren zu Hause. Trotzdem hat ein Dieb bei uns eingebrochen.", "Obwohl wir zu Hause waren, hat ein Dieb bei uns eingebrochen.", "Trotz unserer Anwesenheit, hat ein Dieb bei uns eingebrochen."],
"Ihr wart beim Frisör. (eures Frisörbesuchs) - Ihr seht immer noch fürchterlich (=horrible) aus." : ["Ihr wart beim Frisör.", "Ihr wart beim Frisör. Trotzdem seht ihr immer noch fürchterlich aus.", "Obwohl ihr beim Frisör war, seht ihr immer noch fürchterlich aus.", "Trotz eures Frisörbesuches, seht ihr immer noch fürchterlich aus."]}
]`;

const triggers = ['Ich habe Hunger. (meines Hungers) - nichts essen', 'Ich habe viel Geld. (meines vielen Geldes) - nicht glücklich sein', 'Ich bin müde. (meiner Müdigkeit) - nicht ins Bett gehen', 'Ich bin noch nicht alt. (meines niedrigen Alters) - graues Haar haben', 'Es ist kalt. (der Kälte) - kurze Hosen tragen', 'Er hat 10 Kilo abgenommen (=lost weight). (seines Gewichtsverlusts) - seine Frau verlässt ihn (=leaves)', 'Sie ist intelligent. (ihrer Intelligenz) - sich immer in den falschen Mann verlieben (=fall in love)', 'Das neue Schreiphone ist sehr teuer. (=seines hohen Preises) - Viele Leute kaufen es.', 'Die Musik ist nicht laut. (der niedrigen Lautstärke). - Sie stört mich.', 'Ich habe diesen Satz mehrmals gelesen. (mehrmaligen Lesens) - Ich verstehe ihn nicht.', 'Wir waren zu Hause. (unserer Anwesenheit) - Ein Dieb hat bei uns eingebrochen.', 'Ihr wart beim Frisör. (eures Frisörbesuchs) - Ihr seht immer noch fürchterlich (=horrible) aus.'];