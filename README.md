# NWT2015Tim15

Online savjetovalište je web aplikacija koja uposlenicima privatne klinike omogućava jednostavniju komunikaciju s pacijentima. Ona omogućava svim korisnicima da postavljaju pitanja vezana za zdravlje, koja su grupisana po kategorijama, na koja odgovaraju doktori sa svojim savjetima, odnosno stručna lica klinike. 

Također, aplikacija omogućuje pacijentima da imaju uvid u slobodne termine kod doktora u vidu kalendara, te i rezervaciju za iste. U tom slučaju, korisnici se trebaju registrovati i prijaviti na aplikaciju. Osoblje klinike (medicinska sestra) u tom slučaju prima zahtjev za rezervacijom termina, koji može prihvatiti ili odbiti. Nakon prihvatanja ili odbijanja pacijent dobiva obrazloženje. Za rezervisanje termina, potrebno je da korisnik bude registrovan. Također, osoblje klinike ima mogućnost dodavanja nove rezervacije.

Ostavljanje pohvala ili žalbi na rad klinike je još jedna funkcionalnost koja je omogućena pacijentima, a uvid u to ima uprava klinike.

Upravljanje rezervacijama, žalbama/pohvalama, kategorijama zdravstva i korisnicima aplikacije i njihovim privilegijama je zadatak menadžera klinike koji ima pristup ovim opcijama kroz administracijski panel.

Tipovi korisnika u sistemu

gost korisnik - mogu postavljati pitanja

registrirani korisnik

Privilegije registriranog korisnika u aplikaciji: 

medicinska sestra - prihvata ili odbija zahtjeve (ukoliko je zahtjev odbijen ona daje obrazloženje za to) za rezervacijom termina i može upisivati dodatne rezervacije koje nisu napravljene putem ove aplikacije (napravljene putem telefona i sl).

doktor - odgovara na postavljena pitanja.

menadžer - upravlja rezervacijama, žalbama/pohvalama, kategorijama zdravstva i korisnicima aplikacije i njihovim privilegijama kroz administracijski panel.

pacijent - pored mogućnosti postavljanja pitanja, korisnik koji je registrovan na sistem kao pacijent može rezervisati termine za pregled i imati uvid u slobodne termine za rezervaciju u vidu kalendara. On također može ostavljati pohvale i žalbe na rad klinike.

Moduli: 

Modul za registraciju i prijavu
Modul za upravljanje korisnicima
Modul za upravljanje rezervacijama
Mdul za upravljanje pohvalama/žalbama
Modul za upravljanje kategorijama (kategorije se odnose na kategorije unutar kojih se mogu postaviti pitanja)
Modul za savjete

Tehnološki stek:

Frontend: AngularJS + Twitter Bootstrap

Backend: Ruby on Rails (ORM - Active Record) + PostgreSQL (baza podataka)
