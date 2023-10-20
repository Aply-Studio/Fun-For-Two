let arr_easy     = [
                    {mode:'TrinkSpiel', task:'Es gibt keine einfachen Aufgaben bei dem TrinkSpiel'},

                    {mode:'Special', task:'Es gibt keine einfachen Aufgaben bei dem TrinkSpiel'},

                    {mode:'WarheitoderPflicht', task:'Welches Tier wärst du am liebsten?'},
                    {mode:'WarheitoderPflicht', task:'Hast du schon mal illegale Drogen genommen?'},
                    {mode:'WarheitoderPflicht', task:'Hast du Anna schonmal an der Möse geleckt? - Fragt der Motherfucker'},
                    {mode:'WarheitoderPflicht', task:'Was war das kriminellste, was du je getan hast?'},
                    {mode:'WarheitoderPflicht', task:'Worauf guckst du zuerst, wenn du jemanden kennenlernst?'},
                    {mode:'WarheitoderPflicht', task:'Hast du schon mal jemanden betrogen?'},
                    {mode:'WarheitoderPflicht', task:'Was würdest du machen, wenn du nur noch eine Stunde zu leben hättest?'},
                    {mode:'WarheitoderPflicht', task:'Was ist das Gemeinste, was dir jemals jemand angetan hat?'},
                    {mode:'WarheitoderPflicht', task:'Was war das Letzte, wofür du geweint hast?'},
                    {mode:'WarheitoderPflicht', task:'Hast du schon einmal etwas Illegales getan, wofür du nicht erwischt wurdest?'},
                    {mode:'WarheitoderPflicht', task:'Was würdest du machen, wenn du für einen Tag ein Mann oder eine Frau wärst?'},
                    {mode:'WarheitoderPflicht', task:'Was turnt dich bei Frauen/Männern besonders an?'},
                    {mode:'WarheitoderPflicht', task:'Bist du im Moment verliebt?'},
                    {mode:'WarheitoderPflicht', task:'Hast du schon mal etwas geklaut? Wenn ja, was?'},
                    {mode:'WarheitoderPflicht', task:'Was war dein schlimmstes Date?'},
                    {mode:'WarheitoderPflicht', task:'Hast du schon mal eine Straftat begangen?'},
                    {mode:'WarheitoderPflicht', task:'Was ist das Längste, was du jemals ohne Duschen ausgehalten hast?'},
                    {mode:'WarheitoderPflicht', task:'Hast du schon einmal in der Öffentlichkeit gefurzt und es jemand anderem in die Schuhe geschoben?'},
                    {mode:'WarheitoderPflicht', task:'Was war der aufregendste Moment deines Lebens?'},
                    {mode:'WarheitoderPflicht', task:'Hast du schon einmal etwas getan, wofür du dich sehr geschämt hast?'},

                    {mode:'WarheitoderPflicht', task:'Nichts passiert'}
                   ];

let arr_normal   = [
                    {mode:'TrinkSpiel', task:'Alle Spieler tauschen ihren Namen mit dem rechten Sitznachbarn'},
                    {mode:'TrinkSpiel', task:'Spiele eine Runde „Ich mache meinen Koffer“. Der Verlierer trinkt'},
                    {mode:'TrinkSpiel', task:'Sing ein Lied oder trink'},
                    {mode:'TrinkSpiel', task:'Du musst für die ganze Gruppe bis zum Ende der Runde Getränke holen und servieren'},
                    {mode:'TrinkSpiel', task:'Stimmt darüber ab, wer als letztes heiraten wird. Die Person muss trinken'},
                    {mode:'TrinkSpiel', task:'Mache der linken Person ein Kompliment'},
                    {mode:'TrinkSpiel', task:'Verteile zwei Shots an beliebige Spieler'},
                    {mode:'TrinkSpiel', task:'Wähle einen Spieler der immer dann ein Tiergeräusch machen muss, wenn ein ausgewählter Spieler trinkt'},
                    {mode:'TrinkSpiel', task:'Egal was der Spieler zu deiner Linken sagt, du musst vehement widersprechen'},
                    {mode:'TrinkSpiel', task:'Das böse Wort darf ab sofort nicht mehr verwendet werden'},

                    {mode:'TrinkSpiel', task:'Nichts passiert'},

                    {mode:'Special', task:'Gib deinem Gegenüber einen Kuss auf den Mund'},
                    {mode:'Special', task:'Verwöhne den Nacken deines Gegenübers mit Küssen und deiner Zunge 0,5min (vorsichtig)'},
                    {mode:'Special', task:'Sag deinem Gegenüber, was er/sie dir bedeutet'},
                    {mode:'Special', task:'Sag deinem Gegenüber, warum du ihn/sie liebst'},
                    {mode:'Special', task:'Zieh dir ein Körperteil deiner Wahl aus'},
                    {mode:'Special', task:'Lass dir ein Körperteil deiner Wahl von deinem Gegenüber ausziehen'},
                    {mode:'Special', task:'Zieh dir ein Körperteil aus, dein Gegenüber hat die Wahl'},
                    {mode:'Special', task:'Lass dir ein Körperteil ausziehen, dein Gegenüber hat die Wahl'},
                    {mode:'Special', task:'Kuscheln mit deinem Gegenüber für 2m'},
                    {mode:'Special', task:'Kuscheln mit deinem Gegenüber für 4min'},
                    {mode:'Special', task:'Schreibe deinem Gegenüber einen Brief in 4min'},
                    {mode:'Special', task:'Setzt dich in den Schoss deines Gegenüber'},
                    {mode:'Special', task:'Nenne ein Körperteil, an dem du gerne gestreichelt werden würdest. Dein Gegnüber streichelt dir dieses für eine Minute'},

                    {mode:'WahrheitoderPflicht', task:'Was ist das Geheimnis, das du deinen Eltern nie erzählt hast?'},
                    {mode:'WahrheitoderPflicht', task:'Hast du jemals absichtlich etwas gestohlen? Wenn ja, was?'},
                    {mode:'WahrheitoderPflicht', task:'Was ist das Schlimmste, was du jemals jemandem angetan hast?'},
                    {mode:'WahrheitoderPflicht', task:'Hast du jemals in der Öffentlichkeit uriniert? Wo war das?'},
                    {mode:'WahrheitoderPflicht', task:'Hast du jemals über Selbstmord nachgedacht?'},
                    {mode:'WahrheitoderPflicht', task:'Was ist das Böseste, was du jemals getan hast, ohne erwischt zu werden?'},
                    {mode:'WahrheitoderPflicht', task:'Hast du jemals absichtlich jemanden verletzt? Warum und wie?'},
                    {mode:'WahrheitoderPflicht', task:'Was ist das Unethischste, das du jemals getan hast?'},
                    {mode:'WahrheitoderPflicht', task:'Hast du jemals einen Freund oder eine Freundin betrogen?'},
                    {mode:'WahrheitoderPflicht', task:'Was ist das Ekligste, das du jemals gegessen hast?'},
                    {mode:'WahrheitoderPflicht', task:'Hast du jemals etwas Illegales getan? Wenn ja, was?'},
                    {mode:'WahrheitoderPflicht', task:'Hast du jemals einen Alptraum gehabt, der dich noch heute verfolgt?'},
                    {mode:'WahrheitoderPflicht', task:'Was ist das Gemeinste, was du jemals zu jemandem gesagt hast?'},
                    {mode:'WahrheitoderPflicht', task:'Hast du jemals einen Familienangehörigen angelogen? Warum?'},
                    {mode:'WahrheitoderPflicht', task:'Was ist das Schlimmste, was du jemals über jemanden hinter seinem Rücken gesagt hast?'},
                    {mode:'WahrheitoderPflicht', task:'Hast du jemals absichtlich einen Streit angezettelt? Warum?'},
                    {mode:'WahrheitoderPflicht', task:'Was ist die dunkelste Sache, die du jemals gegoogelt hast?'},
                    {mode:'WahrheitoderPflicht', task:'Hast du jemals eine Beziehung zerstört? Wie?'},
                    {mode:'WahrheitoderPflicht', task:'Was ist das Schlimmste, was du jemals jemandem anvertraut hast?'},
                    {mode:'WahrheitoderPflicht', task:'Hast du jemals jemanden betrogen und es nie zugegeben?'},
                    {mode:'WahrheitoderPflicht', task:'Hast du jemals einen Freund oder eine Freundin ausgenutzt?'},
                    {mode:'WahrheitoderPflicht', task:'Was ist das Schrecklichste, was du jemals jemandem angetan hast?'},
                    {mode:'WahrheitoderPflicht', task:'Hast du jemals ein Geheimnis verraten, das du nicht hättest verraten sollen?'},
                    {mode:'WahrheitoderPflicht', task:'Was ist die grausamste Lüge, die du jemals erzählt hast?'},
                    {mode:'WahrheitoderPflicht', task:'Hast du jemals jemanden ernsthaft verletzt?'},
                    {mode:'WahrheitoderPflicht', task:'Was ist die schlimmste Entscheidung, die du jemals getroffen hast?'},
                    {mode:'WahrheitoderPflicht', task:'Hast du jemals eine Person des gleichen Geschlechts geküsst?'},
                    {mode:'WahrheitoderPflicht', task:'Was ist das Abscheulichste, was du jemals gesehen hast?'},
                    {mode:'WahrheitoderPflicht', task:'Hast du jemals jemandem gedroht?'},
                    {mode:'WahrheitoderPflicht', task:'Was ist die größte Sünde, die du je begangen hast?'}
                   ];

let arr_hard     = [
                    {mode:'TrinkSpiel', task:'Alle Singles trinken'},
                    {mode:'TrinkSpiel', task:'Alle in einer Beziehung trinken'},
                    {mode:'TrinkSpiel', task:'Alle ohne Bart trinken'},
                    {mode:'TrinkSpiel', task:'Der kleinste trinkt'},
                    {mode:'TrinkSpiel', task:'Mache einen Handstand. Wenn du es nicht schaffst, trinkst du'},
                    {mode:'TrinkSpiel', task:'Dein linker Nachbar trinkt einen Shot'},
                    {mode:'TrinkSpiel', task:'Du trinkst einen Shot'},
                    {mode:'TrinkSpiel', task:'Ex ein Glas Wasser, du brauchst es wahrscheinlich'},
                    {mode:'TrinkSpiel', task:'Spiele Schere, Stein, Papier mit einem ausgewählten Spieler. Der Verlierer trinkt'},
                    {mode:'TrinkSpiel', task:'Jedes Mal, dass du von jetzt an trinkst, musst du „Danke“ sagen'},
                    {mode:'TrinkSpiel', task:'Erzähle eine Lüge und eine Warheit. Die Mitspieler raten. Irren sie sich, trinken sie'},
                    {mode:'TrinkSpiel', task:'Das böse Wort darf ab sofort nicht mehr verwendet werden'},


                    {mode:'TrinkSpiel', task:'Nichts passiert'},

                    {mode:'Special', task:'Verwöhne den Nacken deines Gegenübers mit Küssen, deinen Zähnen und deiner Zunge 2min (aggressiv)'},
                    {mode:'Special', task:'Zieh dir ein Körperteil deiner Wahl aus'},
                    {mode:'Special', task:'Lass dir ein Körperteil deiner Wahl von deinem Gegenüber ausziehen'},
                    {mode:'Special', task:'Zieh dir ein Körperteil aus, dein Gegenüber hat die Wahl'},
                    {mode:'Special', task:'Lass dir ein Körperteil ausziehen, dein Gegenüber hat die Wahl'},
                    {mode:'Special', task:'Küsse dein Gegenüber 2min (wild)'},
                    {mode:'Special', task:'Wennmöglich, leg deine Hand an das Geschlechtsorgan deines Gegenübers für die nächsten 3 Runden'},
                    {mode:'Special', task:'Lass dich von deinem Gegenüber mit den Händen für 0,5min befriedigen (OHNE Orgasmus)'},
                    {mode:'Special', task:'Küss und leck um das Geschlechtsorgan deines Gegenübers herum, ohne es dabei zu berühren 1min'},
                    {mode:'Special', task:'Gib deinem Gegenüber eine "Geschlechtsorgan Massage" 1,5min'},
                    {mode:'Special', task:'Mache mit deinem Gegenüber rum, ohne dabei eure Geschlechtsorgane zu berühren 1min (aggressiv)'},
                    {mode:'Special', task:'Verbinde die Augen deines Gegenübers für die nächsten 4 Runden'},
                    {mode:'Special', task:'Verbinde die Augen deines Gegenübers und küsse seinen Körper 1min (zart)'},

                    {mode:'WahrheitoderPflicht', task:'Küsse die Person rechts von dir auf den Mund.'},
                    {mode:'WahrheitoderPflicht', task:'Rufe eine Ex-Freundin oder einen Ex-Freund an und gestehe, dass du sie/ihn vermisst.'},
                    {mode:'WahrheitoderPflicht', task:'Iss einen Löffel Senf oder Ketchup.'},
                    {mode:'WahrheitoderPflicht', task:'Tanze wie verrückt für eine Minute, als ob niemand zuschaut.'},
                    {mode:'WahrheitoderPflicht', task:'Stecke deinen Kopf für 30 Sekunden in den Gefrierschrank.'},
                    {mode:'WahrheitoderPflicht', task:'Versuche, einen Esslöffel Zitronensaft zu trinken, ohne das Gesicht zu verziehen.'},
                    {mode:'WahrheitoderPflicht', task:'Trage Socken an den Händen für den Rest des Spiels.'},
                    {mode:'WahrheitoderPflicht', task:'Lasse dir von der Person gegenüber einen Streifen Tesafilm ausreißen.'},
                    {mode:'WahrheitoderPflicht', task:'Iss einen Teelöffel Butter oder Margarine.'},
                    {mode:'WahrheitoderPflicht', task:'Schreibe eine peinliche Nachricht auf Facebook und veröffentliche sie für 10 Minuten.'},
                    {mode:'WahrheitoderPflicht', task:'Versuche, ein Lied rückwärts zu singen.'},
                    {mode:'WahrheitoderPflicht', task:'Mache einen Kopfstand und trage dabei einen Eimer Wasser auf dem Kopf.'},
                    {mode:'WahrheitoderPflicht', task:'Iss einen Löffel Senf, während du dir die Nase zuhältst.'},
                    {mode:'WahrheitoderPflicht', task:'Trage für den Rest des Spiels eine Clownsnase.'},
                    {mode:'WahrheitoderPflicht', task:'Mache einen Truthahn-Gobble-Sound für 30 Sekunden.'},
                    {mode:'WahrheitoderPflicht', task:'Bilde einen menschlichen Turm mit zwei anderen Personen in der Gruppe.'},
                    {mode:'WahrheitoderPflicht', task:'Trage ein Lächeln aus Zahnpasta für den Rest des Spiels.'},
                    {mode:'WahrheitoderPflicht', task:'Versuche, einen Stift mit deinem Fuß zu benutzen, um deinen Namen zu schreiben.'},
                    {mode:'WahrheitoderPflicht', task:'Iss eine Handvoll roher Zwiebeln.'},
                    {mode:'WahrheitoderPflicht', task:'Trage für den Rest des Spiels eine Brille ohne Gläser.'}
                   ];

let arr_hardcore = [
                    {mode:'TrinkSpiel', task:'Dir werden drei Personen genannt. Wen ficken, heiraten und umbringen. Wieso?'},
                    {mode:'TrinkSpiel', task:'Leere das Glas deines linken Sitznachbarn'},
                    {mode:'TrinkSpiel', task:'Der nüchternste trinkt'},
                    {mode:'TrinkSpiel', task:'Alle mit blonden Haaren trinken'},
                    {mode:'TrinkSpiel', task:'Alle mit schwarzen Haaren trinken'},
                    {mode:'TrinkSpiel', task:'Alle mit braunen Haaren trinken'},
                    {mode:'TrinkSpiel', task:'Dein rechter Nachbar trinkt einen Shot'},
                    {mode:'TrinkSpiel', task:'Dein linker Nachbar trinkt einen Shot'},
                    {mode:'TrinkSpiel', task:'Du trinkst einen Shot'},
                    {mode:'TrinkSpiel', task:'Alle Spieler müssen trinken'},
                    {mode:'TrinkSpiel', task:'Mache 3 Liegestütze (oder trinke)'},
                    {mode:'TrinkSpiel', task:'Das böse Wort darf ab sofort nicht mehr verwendet werden'},


                    {mode:'TrinkSpiel', task:'Nichts passiert'},

                    {mode:'Special', task:'Geht in die 69 Position und befriedigt euch gegenseitig 1min (vorsichtig)'},
                    {mode:'Special', task:'Schreibe deinem Gegenüber einen Brief in 4min, während dieser dich oral befriedigt (vorsichtig)'},
                    {mode:'Special', task:'Dein Gegenüber legt sich auf den Rücken, du krabbelst über ihn/sie rüber und lässt dich oral befriedigen 1min'},
                    {mode:'Special', task:'Streichel ihre Muschi für eine Minute mit deinem Schwanz. Dann Wechsel. Sie nimmt deinen Schwanz in die Hand und streichelt sich mit ihm eine Minute zwischen den Beinen 1,5min'},
                    {mode:'Special', task:'Dein Gegenüber (weiblich) muss dich für 0,5min reiten'},
                    {mode:'Special', task:'Du musst dein Gegebüber domminieren, dabei darfst du alles machen 1,5min'},
                    {mode:'Special', task:'Befriedigt euch gegenseitig 0,5min'},
                    {mode:'Special', task:'Befriedigt euch selbst und schaut einander zu 0,5min'},
                    {mode:'Special', task:'Du setzt dich auf den Rand des Bettes oder einem Stuhl, dein Gegenüber kniet vor dir und muss dich oral befriedigen 1min'},
                    {mode:'Special', task:'Du legst dich auf den Rücken, dein Gegenüber krabbelt über dich rüber und befriedigst ihn/sie oral 1min'},
                    {mode:'Special', task:'Du (weiblich) setzt dich auf einen Stuhl, Tisch, ... und er kniet sich vor dich, sodass er in dich eindringen kann. Nun schlingst du deine Beine um seine Hüfte und deine Arme um seinen Hals. Jetzt steht er auf und hält dich hoch. Versucht so eine Minute Sex zu haben 2min'},

                    {mode:'WahrheitoderPflicht', task:'Versuche, eine Minute lang einen Handstand zu machen.'},
                    {mode:'WahrheitoderPflicht', task:'Trage für den Rest des Spiels Unterwäsche auf dem Kopf.'},
                    {mode:'WahrheitoderPflicht', task:'Rufe bei einer Pizzeria an und bestelle eine Pizza mit ungewöhnlichen Belägen.'},
                    {mode:'WahrheitoderPflicht', task:'Singe ein Lied und tue so, als wärst du ein Opernsänger.'},
                    {mode:'WahrheitoderPflicht', task:'Versuche, ein Glas Wasser zu trinken, während du auf dem Kopf stehst.'},
                    {mode:'WahrheitoderPflicht', task:'Binde deine Schuhe zusammen und trage sie für den Rest des Spiels so.'},
                    {mode:'WahrheitoderPflicht', task:'Lege eine Krawatte oder einen Schal an und trage ihn für den Rest des Spiels.'},
                    {mode:'WahrheitoderPflicht', task:'Iss einen Löffel scharfe Sauce.'},
                    {mode:'WahrheitoderPflicht', task:'Mache einen Bauchtanz für 30 Sekunden.'},
                    {mode:'WahrheitoderPflicht', task:'Trage eine Minute lang deine Kleidung rückwärts.'},
                    {mode:'WahrheitoderPflicht', task:'Iss ein Teelicht, ohne es anzuzünden.'},
                    {mode:'WahrheitoderPflicht', task:'Mache eine Minute lang verrückte Grimassen.'},
                    {mode:'WahrheitoderPflicht', task:'Versuche, eine Minute lang nicht zu lachen, egal was passiert.'},
                    {mode:'WahrheitoderPflicht', task:'Stecke deine Hand in eine Schüssel mit Eiswasser für 30 Sekunden.'},
                    {mode:'WahrheitoderPflicht', task:'Iss eine Handvoll Katzenfutter (natürlich ungesund, bitte nicht wirklich tun).'},
                    {mode:'WahrheitoderPflicht', task:'Rufe deine Mutter oder deinen Vater an und sage, dass du heiratest.'},
                    {mode:'WahrheitoderPflicht', task:'Iss einen Löffel Erdnussbutter ohne zu trinken.'},
                    {mode:'WahrheitoderPflicht', task:'Lege deine Hand in eine Schüssel mit Pudding und lasse sie dort, bis deine nächste Aufgabe kommt.'},
                    {mode:'WahrheitoderPflicht', task:'Lege einen Löffel Meerrettich auf deine Zunge und halte ihn dort für 30 Sekunden.'},
                    {mode:'WahrheitoderPflicht', task:'Rufe deine letzte gespeicherte Nummer an und sage "Ich liebe dich". Vermutlich wird es jemand Lustiges oder Unbekanntes sein.'}
                   ];
Check_Local_Storage();

function Check_Local_Storage(){
 if(localStorage.getItem('arr_easy') == null){
   var arr_easy_store     = JSON.stringify(arr_easy);
   localStorage.setItem('arr_easy', arr_easy_store);
 }
 else{
   arr_easy = JSON.parse(localStorage.getItem('arr_easy'));
 }
 if(localStorage.getItem('arr_normal') == null){
   var arr_normal_store   = JSON.stringify(arr_normal);
   localStorage.setItem('arr_normal', arr_normal_store);
 }
 else{
   arr_normal = JSON.parse(localStorage.getItem('arr_normal'));
 }
 if(localStorage.getItem('arr_hard') == null){
   var arr_hard_store     = JSON.stringify(arr_hard);
   localStorage.setItem('arr_hard', arr_hard_store);
 }
 else{
   arr_hard = JSON.parse(localStorage.getItem('arr_hard'));
 }
 if(localStorage.getItem('arr_hardcore') == null){
   var arr_hardcore_store = JSON.stringify(arr_hardcore);
   localStorage.setItem('arr_hardcore', arr_hardcore_store);
 }
 else{
   arr_hardcore = JSON.parse(localStorage.getItem('arr_hardcore'));
 }
}
function Save_Arrays(){
 var arr_easy_store     = JSON.stringify(arr_easy);
 localStorage.setItem('arr_easy', arr_easy_store);

 var arr_normal_store   = JSON.stringify(arr_normal);
 localStorage.setItem('arr_normal', arr_normal_store);

 var arr_hard_store     = JSON.stringify(arr_hard);
 localStorage.setItem('arr_hard', arr_hard_store);

 var arr_hardcore_store = JSON.stringify(arr_hardcore);
 localStorage.setItem('arr_hardcore', arr_hardcore_store);
}
function Load_Arrays(){
 arr_easy = JSON.parse(localStorage.getItem('arr_easy'));
 console.log(arr_easy)
}
