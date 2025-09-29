const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const testArticles = [
  {
    title: "Trump: Skratit ću rok od 50 dana kog sam dao Putinu",
    content: `Američki predsjednik Donald Trump rekao je u ponedjeljak da je razočaran sporim napretkom u pregovorima s Rusijom o ukrajinskom ratu i da će skratiti rok koji je dao ruskom predsjedniku Vladimiru Putinu za postizanje sporazuma.

"Pregovori idu sporije nego što sam očekivao," rekao je Trump u intervjuu za Fox News. "Dao sam Putinu 50 dana da postigne sporazum, ali sada vidim da to možda neće biti dovoljno vremena."

Trump je dodao da će razmotriti dodatne sankcije ako se napredak ne ubrza u sljedećih nekoliko tjedana. Ova izjava dolazi u vrijeme kada se napetosti između SAD-a i Rusije nastavljaju eskalirati oko ukrajinskog pitanja.`,
    category: "Vijesti",
    author: "Zoran Meter",
    image_url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop"
  },
  {
    title: "Austrija razmišlja o odbacivanju neutralnosti i priključenju NATO-u",
    content: `Austrijska vlada razmatra mogućnost napuštanja svoje tradicionalne neutralnosti i priključenja NATO savezu, izvijestili su lokalni mediji.

Ova potencijalna promjena politike dolazi u kontekstu rastućih sigurnosnih izazova u Europi i promjena u geopolitičkom okruženju nakon ruske invazije na Ukrajinu.

"Neutralnost je bila temelj naše vanjske politike desetljećima, ali sadašnja situacija u Europi zahtijeva da ponovno razmotrimo naše sigurnosne opcije," rekao je austrijski ministar obrane.

Međutim, ova inicijativa naišla je na otpor u parlamentu i javnosti, gdje mnogi građani i dalje podržavaju tradicionalnu neutralnu poziciju Austrije.`,
    category: "Obrana i sigurnost",
    author: "dr. sc. Jadranka Polović",
    image_url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop"
  },
  {
    title: "Indija konačno umirovljuje legendarni Mig-21 nakon 62 godine",
    content: `Indijsko ratno zrakoplovstvo godinama odgađa umirovljenje svojih borbenih zrakoplova MiG-21, ali konačno će uskoro okrenuti ovu stranicu.

MiG-21, koji je prvi put ušao u službu 1963. godine, postao je simbol indijskog ratnog zrakoplovstva i jedan od najdugovječnijih borbenih zrakoplova u povijesti.

"Ovo je emotivan trenutak za sve nas koji smo letjeli s ovim legendarnim zrakoplovom," rekao je zapovjednik indijskog ratnog zrakoplovstva. "MiG-21 je služio našoj zemlji s poštovanjem više od šest desetljeća."

Zamjena će uključivati moderne zrakoplove poput Rafalea i domaće Tejasa, što predstavlja značajan korak naprijed u modernizaciji indijskih zračnih snaga.`,
    category: "Vojna povijest",
    author: "Matija Šerić",
    image_url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop"
  },
  {
    title: "Glad u Nigeriji: 31 milijun ljudi umire, a svijet šuti",
    content: `Iako je globalno ljeto 2025. prvenstveno obilježeno Trumpovim carinama, ratovima u Ukrajini i Svetoj Zemlji, postoje i drugi vrlo važni međunarodni problemi o kojima se slabo govori.

Jedan od najvećih humanitarnih kriza današnjice odvija se u Nigeriji, gdje se procjenjuje da 31 milijun ljudi pati od akutne gladi.

"Ova kriza je potpuno zanemarena od strane međunarodne zajednice," rekao je predstavnik Ujedinjenih naroda. "Potrebne su hitne mjere kako bi se spriječila još veća katastrofa."

Uzrok krize je složen - od klimatskih promjena i suša do političke nestabilnosti i sigurnosnih izazova u regiji. Međunarodna pomoć je nedostatna, a lokalne vlasti se bore s ograničenim resursima.`,
    category: "Analize",
    author: "dr. sc. Sanja Vujačić",
    image_url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop"
  },
  {
    title: "Tajland i Kambodža će u Maleziji pregovarati o pograničnom sukobu",
    content: `Čelnici Tajlanda i Kambodže sastat će se sutra u Maleziji kako bi razgovarali o pograničnom sukobu, izvijestila je tajlandska vlada.

Pregovori dolaze nakon nekoliko dana eskalacije napetosti na granici između dviju zemalja, gdje su se dogodili topnički napadi i manji oružani sukobi.

"Malezija je ponudila svoje posredovanje, a obje strane su pristale na neutralno tlo za pregovore," rekao je tajlandski ministar vanjskih poslova.

Ova inicijativa predstavlja pozitivan korak u rješavanju dugogodišnjeg pograničnog spora koji je povremeno eskalirao u oružane sukobe.`,
    category: "Vijesti",
    author: "Tonči Mirić",
    image_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"
  },
  {
    title: "UAE i Jordan iz aviona bacaju humanitarnu pomoć u Gazu",
    content: `Jordanska državna televizija izvijestila je danas popodne da su Kraljevske jordanske zračne snage sudjelovale u operaciji s Ujedinjenim Arapskim Emiratima kako bi u Gazu bacile "25 tona pomoći".

Ova operacija predstavlja nastavak humanitarnih napora regije za pružanje pomoći stanovništvu Gaze koje se suočava s teškom humanitarnom krizom.

"Ovo je dio našeg dugoročnog angažmana za pomoć palestinskom narodu," rekao je jordanski predstavnik. "Nastavit ćemo s ovim operacijama sve dok je potrebno."

Međunarodne organizacije su pozvale na više humanitarne pomoći i pristupa za humanitarne organizacije u Gazu.`,
    category: "Izraelsko-palestinski sukob",
    author: "Zekerijah Smajić",
    image_url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop"
  },
  {
    title: "Ruski tempo proizvodnje dronova i projektila nadmašuje zapadnu proizvodnju presretača",
    content: `Fabian Hoffmann, znanstvenik sa Sveučilišta u Oslu i istraživač raketnog oružja, bavio se pitanjem ruskih zračnih napada na Ukrajinu krstarećim projektilima.

Prema njegovoj analizi, ruski tempo proizvodnje dronova i projektila značajno nadmašuje zapadnu sposobnost proizvodnje presretača i obrambenih sustava.

"Ovo predstavlja ozbiljan strateški izazov za Zapad," rekao je Hoffmann. "Rusija je uspjela prilagoditi svoju vojnu industriju ratnim uvjetima na način koji Zapad još nije."

Ova analiza pokazuje potrebu za ubrzanjem zapadne vojne proizvodnje i razvojem novih obrambenih tehnologija.`,
    category: "Vojna analiza",
    author: "Bruno Rukavina",
    image_url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop"
  },
  {
    title: "Zelenski se priprema zatvoriti dva velika politička rivala: Klička i Porošenka",
    content: `Ukrajinski predsjednik Volodimir Zelenski odlučio je završiti ono što je vjerojatno bio njegov najgori tjedan na dužnosti otkako je izabran 2019. godine.

Prema izvorima iz ukrajinskog parlamenta, Zelenski se priprema za uhićenje ili ograničavanje aktivnosti dvaju svojih glavnih političkih rivala - bivšeg predsjednika Petra Porošenka i opozicionog političara Jurija Klička.

"Ovo je očiti pokušaj potiskivanja političke opozicije u vrijeme kada Ukrajina treba jedinstvo," rekao je predstavnik opozicije.

Ova akcija dolazi u vrijeme kada se Ukrajina suočava s teškim ratnim izazovima i potrebom za međunarodnom podrškom.`,
    category: "Rat u Ukrajini",
    author: "dr. sc. Igor Dekanić",
    image_url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop"
  }
];

async function addTestArticles() {
  try {
    console.log('Adding test articles to Supabase...');
    
    for (const article of testArticles) {
      const { data, error } = await supabase
        .from('articles')
        .insert([article]);
      
      if (error) {
        console.error('Error adding article:', error);
      } else {
        console.log(`Added article: ${article.title}`);
      }
    }
    
    console.log('Finished adding test articles!');
  } catch (error) {
    console.error('Error:', error);
  }
}

addTestArticles(); 