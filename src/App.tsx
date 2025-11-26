import React, { useState } from 'react';
import { Car, AlertTriangle, CheckCircle, XCircle, Calculator, Search, ExternalLink, Globe } from 'lucide-react';

const Fiat500Analyzer = () => {
  const [language, setLanguage] = useState('fr');
  const [carData, setCarData] = useState({
    price: '',
    mileage: '',
    year: '',
    engine: '1.2',
    beltChanged: false,
    serviceHistory: false,
    accidents: false
  });
  
  const [analysis, setAnalysis] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  // Translations
  const translations = {
    fr: {
      title: "Analyseur Fiat 500 Occasion",
      subtitle: "Doma est la plus belle des femmes",
      price: "Prix (PLN)",
      mileage: "Kilométrage (km)",
      year: "Année",
      engine: "Moteur",
      beltChanged: "Courroie de distribution changée",
      serviceHistory: "Historique d'entretien complet",
      accidents: "Accident(s) déclaré(s)",
      analyzeBtn: "Analyser la voiture",
      searchBtn: "Liens de recherche",
      searchLinksTitle: "Liens de recherche directs",
      analysisTitle: "Résultat de l'analyse",
      globalScore: "Score global",
      priceAnalysis: "Analyse du prix",
      estimatedPrice: "Prix estimé du marché:",
      motorTitle: "Moteur:",
      reliability: "Fiabilité:",
      weakPoints: "Points faibles:",
      strengths: "Points forts:",
      warnings: "Avertissements",
      positives: "Points positifs",
      repairBudget: "Budget réparations prévisionnelles",
      repairBudgetText: "Prévoir environ",
      repairBudgetSub: "sur les 2-3 prochaines années",
      repairBudgetDetail: "(Courroie, embrayage, amortisseurs, entretiens majeurs)",
      checklistTitle: "Checklist inspection avant achat",
      mechanical: "Mécanique",
      bodyInterior: "Carrosserie & intérieur",
      verdict: {
        good: "RECOMMANDÉ",
        ok: "ACCEPTABLE AVEC RÉSERVES",
        bad: "À ÉVITER"
      },
      priceVerdict: {
        excellent: "🟢 EXCELLENT PRIX - Très bon rapport qualité/prix",
        good: "🟡 BON PRIX - Dans la moyenne du marché",
        high: "🟠 PRIX ÉLEVÉ - Possibilité de négociation",
        tooHigh: "🔴 PRIX TROP ÉLEVÉ - Chercher ailleurs"
      },
      fillFields: "Veuillez remplir tous les champs obligatoires",
      checklistItems: {
        noSmoke: "Pas de fumée bleue au démarrage",
        oilLevel: "Niveau huile correct (pas de consommation)",
        roadTest: "Test sur route accidentée (bruits suspension)",
        clutch: "Embrayage ne patine pas",
        temperature: "Température moteur stable",
        noLeaks: "Pas de fuite liquides",
        rust: "Rouille passages de roues / bas de caisse",
        electric: "Tous équipements électriques fonctionnent",
        ac: "Climatisation froide",
        humidity: "Pas d'humidité intérieur",
        obd: "Codes erreur OBD (diagnostic)",
        history: "Historique Carfax/AutoCheck"
      }
    },
    en: {
      title: "Fiat 500 Used Car Analyzer",
      subtitle: "Doma is the most beautiful woman",
      price: "Price (PLN)",
      mileage: "Mileage (km)",
      year: "Year",
      engine: "Engine",
      beltChanged: "Timing belt changed",
      serviceHistory: "Complete service history",
      accidents: "Accident(s) declared",
      analyzeBtn: "Analyze the car",
      searchBtn: "Search links",
      searchLinksTitle: "Direct search links",
      analysisTitle: "Analysis result",
      globalScore: "Overall score",
      priceAnalysis: "Price analysis",
      estimatedPrice: "Estimated market price:",
      motorTitle: "Engine:",
      reliability: "Reliability:",
      weakPoints: "Weak points:",
      strengths: "Strengths:",
      warnings: "Warnings",
      positives: "Positive points",
      repairBudget: "Expected repair budget",
      repairBudgetText: "Plan approximately",
      repairBudgetSub: "over the next 2-3 years",
      repairBudgetDetail: "(Belt, clutch, shock absorbers, major services)",
      checklistTitle: "Pre-purchase inspection checklist",
      mechanical: "Mechanical",
      bodyInterior: "Body & interior",
      verdict: {
        good: "RECOMMENDED",
        ok: "ACCEPTABLE WITH RESERVATIONS",
        bad: "AVOID"
      },
      priceVerdict: {
        excellent: "🟢 EXCELLENT PRICE - Very good value for money",
        good: "🟡 GOOD PRICE - Average market value",
        high: "🟠 HIGH PRICE - Room for negotiation",
        tooHigh: "🔴 PRICE TOO HIGH - Look elsewhere"
      },
      fillFields: "Please fill in all required fields",
      checklistItems: {
        noSmoke: "No blue smoke on startup",
        oilLevel: "Correct oil level (no consumption)",
        roadTest: "Test on rough road (suspension noises)",
        clutch: "Clutch doesn't slip",
        temperature: "Stable engine temperature",
        noLeaks: "No fluid leaks",
        rust: "Rust on wheel arches / sills",
        electric: "All electrical equipment works",
        ac: "Cold air conditioning",
        humidity: "No interior humidity",
        obd: "OBD error codes (diagnostics)",
        history: "Carfax/AutoCheck history"
      }
    },
    pl: {
      title: "Analizator Używanych Fiat 500",
      subtitle: "Doma jest najpiękniejszą kobietą",
      price: "Cena (PLN)",
      mileage: "Przebieg (km)",
      year: "Rok",
      engine: "Silnik",
      beltChanged: "Wymieniony pasek rozrządu",
      serviceHistory: "Pełna historia serwisowa",
      accidents: "Zgłoszone wypadki",
      analyzeBtn: "Analizuj samochód",
      searchBtn: "Linki wyszukiwania",
      searchLinksTitle: "Bezpośrednie linki wyszukiwania",
      analysisTitle: "Wynik analizy",
      globalScore: "Wynik ogólny",
      priceAnalysis: "Analiza ceny",
      estimatedPrice: "Szacowana cena rynkowa:",
      motorTitle: "Silnik:",
      reliability: "Niezawodność:",
      weakPoints: "Słabe punkty:",
      strengths: "Mocne strony:",
      warnings: "Ostrzeżenia",
      positives: "Pozytywne punkty",
      repairBudget: "Przewidywany budżet napraw",
      repairBudgetText: "Przewiduj około",
      repairBudgetSub: "w ciągu najbliższych 2-3 lat",
      repairBudgetDetail: "(Pasek, sprzęgło, amortyzatory, główne przeglądy)",
      checklistTitle: "Lista kontrolna przed zakupem",
      mechanical: "Mechanika",
      bodyInterior: "Karoseria i wnętrze",
      verdict: {
        good: "ZALECANE",
        ok: "AKCEPTOWALNE Z ZASTRZEŻENIAMI",
        bad: "UNIKAĆ"
      },
      priceVerdict: {
        excellent: "🟢 DOSKONAŁA CENA - Bardzo dobry stosunek jakości do ceny",
        good: "🟡 DOBRA CENA - Średnia wartość rynkowa",
        high: "🟠 WYSOKA CENA - Możliwość negocjacji",
        tooHigh: "🔴 CENA ZBYT WYSOKA - Szukaj gdzie indziej"
      },
      fillFields: "Proszę wypełnić wszystkie wymagane pola",
      checklistItems: {
        noSmoke: "Brak niebieskiego dymu przy rozruchu",
        oilLevel: "Prawidłowy poziom oleju (brak spalania)",
        roadTest: "Test na nierównej drodze (hałasy zawieszenia)",
        clutch: "Sprzęgło nie ślizga się",
        temperature: "Stabilna temperatura silnika",
        noLeaks: "Brak wycieków płynów",
        rust: "Rdza na nadkolach / progach",
        electric: "Wszystkie urządzenia elektryczne działają",
        ac: "Zimna klimatyzacja",
        humidity: "Brak wilgoci we wnętrzu",
        obd: "Kody błędów OBD (diagnostyka)",
        history: "Historia Carfax/AutoCheck"
      }
    }
  };

  const t = translations[language];

  // Base de données des points faibles par moteur
  const engineData = {
    '1.2': {
      name: '1.2 8V (69 KM)',
      reliability: 7,
      issues: {
        fr: [
          'Courroie distribution tous les 70-80k km',
          'Consommation huile après 100k km',
          'Joint culasse fragile'
        ],
        en: [
          'Timing belt every 70-80k km',
          'Oil consumption after 100k km',
          'Fragile head gasket'
        ],
        pl: [
          'Pasek rozrządu co 70-80 tys. km',
          'Spalanie oleju po 100 tys. km',
          'Delikatna uszczelka głowicy'
        ]
      },
      positives: {
        fr: ['Pièces abordables', 'Réparations simples', 'Bien connu des mécaniciens'],
        en: ['Affordable parts', 'Simple repairs', 'Well known by mechanics'],
        pl: ['Przystępne części', 'Proste naprawy', 'Dobrze znany mechanikom']
      },
      avgRepairCost: 3000
    },
    '0.9': {
      name: '0.9 TwinAir (85 KM)',
      reliability: 4,
      issues: {
        fr: [
          'Courroie humide très problématique',
          'Consommation huile excessive',
          'Surchauffe fréquente',
          'Réparations très coûteuses'
        ],
        en: [
          'Very problematic wet belt',
          'Excessive oil consumption',
          'Frequent overheating',
          'Very expensive repairs'
        ],
        pl: [
          'Bardzo problematyczny mokry pasek',
          'Nadmierne spalanie oleju',
          'Częste przegrzewanie',
          'Bardzo drogie naprawy'
        ]
      },
      positives: {
        fr: ['Performances correctes', 'Consommation faible'],
        en: ['Decent performance', 'Low fuel consumption'],
        pl: ['Przyzwoite osiągi', 'Niskie zużycie paliwa']
      },
      avgRepairCost: 8000
    },
    '1.4': {
      name: '1.4 16V (100 KM)',
      reliability: 8,
      issues: {
        fr: [
          'Embrayage vers 100k km',
          'Prix pièces plus élevé'
        ],
        en: [
          'Clutch around 100k km',
          'Higher parts prices'
        ],
        pl: [
          'Sprzęgło około 100 tys. km',
          'Wyższe ceny części'
        ]
      },
      positives: {
        fr: ['Fiabilité supérieure', 'Bonnes performances', 'Durabilité'],
        en: ['Superior reliability', 'Good performance', 'Durability'],
        pl: ['Wysoka niezawodność', 'Dobre osiągi', 'Trwałość']
      },
      avgRepairCost: 2500
    },
    '1.2-Dualogic': {
      name: '1.2 8V + Dualogic (69 KM auto)',
      reliability: 4,
      issues: {
        fr: [
          'Boîte Dualogic très problématique (accoups, à-coups)',
          'Usure rapide vers 80-100k km',
          'Réparation boîte très coûteuse (5000+ PLN)',
          'Courroie distribution tous les 70-80k km'
        ],
        en: [
          'Very problematic Dualogic gearbox (jerks, jolts)',
          'Rapid wear around 80-100k km',
          'Very expensive gearbox repair (5000+ PLN)',
          'Timing belt every 70-80k km'
        ],
        pl: [
          'Bardzo problematyczna skrzynia Dualogic (szarpnięcia)',
          'Szybkie zużycie około 80-100 tys. km',
          'Bardzo droga naprawa skrzyni (5000+ PLN)',
          'Pasek rozrządu co 70-80 tys. km'
        ]
      },
      positives: {
        fr: ['Confort urbain', 'Pas de débrayage manuel'],
        en: ['Urban comfort', 'No manual clutch'],
        pl: ['Komfort w mieście', 'Bez ręcznego sprzęgła']
      },
      avgRepairCost: 6500
    },
    '1.2-TCG': {
      name: '1.2 TCG Turbo (105 KM)',
      reliability: 6,
      issues: {
        fr: [
          'Turbo fragile après 120k km',
          'Chaîne distribution coûteuse (3000-4000 PLN)',
          'Historique d\'entretien critique',
          'Consommation huile légère'
        ],
        en: [
          'Fragile turbo after 120k km',
          'Expensive timing chain (3000-4000 PLN)',
          'Maintenance history critical',
          'Slight oil consumption'
        ],
        pl: [
          'Delikatny turbo po 120 tys. km',
          'Drogi łańcuch rozrządu (3000-4000 PLN)',
          'Historia serwisowania krytyczna',
          'Lekkie spalanie oleju'
        ]
      },
      positives: {
        fr: ['Performances supérieures', 'Consommation modérée', 'Plus moderne'],
        en: ['Superior performance', 'Moderate consumption', 'More modern'],
        pl: ['Lepsze osiągi', 'Umiarkowane zużycie', 'Bardziej nowoczesny']
      },
      avgRepairCost: 5500
    },
    '1.3-Diesel': {
      name: '1.3 MultiJet Diesel (75 KM)',
      reliability: 7,
      issues: {
        fr: [
          'Filtre à particules coûteux (2500-3500 PLN)',
          'Turbo délicat après 150k km',
          'Injecteurs fragiles',
          'Huile diesel chère'
        ],
        en: [
          'Expensive particulate filter (2500-3500 PLN)',
          'Fragile turbo after 150k km',
          'Fragile injectors',
          'Expensive diesel oil'
        ],
        pl: [
          'Drogi filtr cząstek stałych (2500-3500 PLN)',
          'Delikatny turbo po 150 tys. km',
          'Delikatne wtryskiwacze',
          'Droge oleje diesel'
        ]
      },
      positives: {
        fr: ['Excellent couple moteur', 'Consommation très faible', 'Autonomie supérieure'],
        en: ['Excellent torque', 'Very low consumption', 'Superior range'],
        pl: ['Doskonały moment obrotowy', 'Bardzo niskie zużycie', 'Większy zasięg']
      },
      avgRepairCost: 5200
    }
  };

  const analyzeValue = () => {
    const price = parseFloat(carData.price);
    const mileage = parseFloat(carData.mileage);
    const year = parseInt(carData.year);
    const engine = engineData[carData.engine];

    if (!price || !mileage || !year) {
      alert(t.fillFields);
      return;
    }

    let score = 100;
    let warnings = [];
    let recommendations = [];

    if (mileage > 150000) {
      score -= 25;
      warnings.push(language === 'fr' ? 'Kilométrage TRÈS élevé - entretien critique' :
                    language === 'en' ? 'Very high mileage - critical maintenance' :
                    'Bardzo wysoki przebieg - krytyczne naprawy');
    } else if (mileage > 80000) {
      score -= 18;
      warnings.push(language === 'fr' ? 'Kilométrage élevé - vérifier courroie distribution' :
                    language === 'en' ? 'High mileage - check timing belt' :
                    'Wysoki przebieg - sprawdzić pasek rozrządu');
    } else if (mileage > 60000 && mileage <= 80000) {
      score -= 10;
      warnings.push(language === 'fr' ? 'Kilométrage moyen - prévoir entretiens majeurs' :
                    language === 'en' ? 'Medium mileage - plan major services' :
                    'Średni przebieg - zaplanować większe przeglądy');
    }

    if (carData.engine === '0.9') {
      score -= 25;
      warnings.push(language === 'fr' ? '⚠️ ATTENTION: Moteur TwinAir très problématique - À ÉVITER' :
                    language === 'en' ? '⚠️ WARNING: TwinAir engine very problematic - AVOID' :
                    '⚠️ UWAGA: Silnik TwinAir bardzo problematyczny - UNIKAĆ');
    }

    if (year < 2015) {
      score -= 10;
      warnings.push(language === 'fr' ? 'Ancien modèle - risque de rouille et électronique' :
                    language === 'en' ? 'Old model - rust and electronics risk' :
                    'Stary model - ryzyko rdzy i elektroniki');
    }

    if (carData.serviceHistory) {
      score += 15;
      recommendations.push(language === 'fr' ? '✓ Historique complet - excellent point' :
                          language === 'en' ? '✓ Complete history - excellent point' :
                          '✓ Pełna historia - doskonały punkt');
    } else {
      score -= 20;
      warnings.push(language === 'fr' ? 'Pas d\'historique - RISQUÉ' :
                    language === 'en' ? 'No history - RISKY' :
                    'Brak historii - RYZYKOWNE');
    }

    if (carData.beltChanged) {
      score += 10;
      recommendations.push(language === 'fr' ? '✓ Courroie changée - économie 2000-3000 PLN' :
                          language === 'en' ? '✓ Belt changed - saving 2000-3000 PLN' :
                          '✓ Wymieniony pasek - oszczędność 2000-3000 PLN');
    } else if (mileage > 70000) {
      score -= 15;
      warnings.push(language === 'fr' ? 'Courroie NON changée + kilométrage élevé - DANGER' :
                    language === 'en' ? 'Belt NOT changed + high mileage - DANGER' :
                    'Pasek NIE wymieniony + wysoki przebieg - NIEBEZPIECZEŃSTWO');
    }

    if (carData.accidents) {
      score -= 30;
      warnings.push(language === 'fr' ? 'Accident déclaré - vérifier structure et qualité réparation' :
                    language === 'en' ? 'Declared accident - check structure and repair quality' :
                    'Zgłoszony wypadek - sprawdzić strukturę i jakość naprawy');
    }

    if (carData.engine === '0.9' && mileage > 70000 && !carData.beltChanged) {
      score -= 25;
      warnings.push(language === 'fr' ? '🔴 COMBO CRITIQUE: TwinAir 0.9 + >70k + courroie non changée = TRÈS DANGEREUX' :
                    language === 'en' ? '🔴 CRITICAL COMBO: 0.9 TwinAir + >70k + belt not changed = VERY DANGEROUS' :
                    '🔴 KRYTYCZNA KOMBINACJA: TwinAir 0.9 + >70k + pasek nie zmieniony = BARDZO NIEBEZPIECZNE');
    }
    if (!carData.serviceHistory && mileage > 100000) {
      score -= 15;
      warnings.push(language === 'fr' ? 'Pas d\'historique ET kilométrage très élevé - boîte noire' :
                    language === 'en' ? 'No history AND very high mileage - black box risk' :
                    'Brak historii I bardzo wysoki przebieg - czarna skrzynka');
    }

    let basePrice;
    if (year >= 2023) basePrice = 32000;
    else if (year >= 2022) basePrice = 30000;
    else if (year >= 2020) basePrice = 27000;
    else if (year >= 2018) basePrice = 25000;
    else if (year >= 2015) basePrice = 22000;
    else if (year >= 2010) basePrice = 18000;
    else basePrice = 14000;

    let mileageDiscount = 0;
    if (mileage <= 30000) {
      mileageDiscount = mileage * 0.25;
    } else if (mileage <= 80000) {
      mileageDiscount = 7500 + (mileage - 30000) * 0.22;
    } else if (mileage <= 150000) {
      mileageDiscount = 18500 + (mileage - 80000) * 0.18;
    } else {
      mileageDiscount = 31100 + (mileage - 150000) * 0.12;
    }
    basePrice -= Math.round(mileageDiscount);

    if (carData.engine === '1.4') basePrice += 5500;
    else if (carData.engine === '0.9') basePrice -= 4500;

    if (year < 2010) basePrice -= (2010 - year) * 800;

    const priceRatio = (price / basePrice) * 100;
    let priceAnalysis = '';
    
    if (priceRatio < 85) {
      priceAnalysis = t.priceVerdict.excellent;
      score += 10;
    } else if (priceRatio < 100) {
      priceAnalysis = t.priceVerdict.good;
    } else if (priceRatio < 115) {
      priceAnalysis = t.priceVerdict.high;
      score -= 10;
    } else {
      priceAnalysis = t.priceVerdict.tooHigh;
      score -= 20;
    }

    let repairBudget = 0;
    const carAge = 2024 - year;

    const budgetByEngine = {
      '1.2': { base: 3000, perYear: 300, perKm100k: 500 },
      '0.9': { base: 9000, perYear: 1000, perKm100k: 1200 },
      '1.4': { base: 2800, perYear: 400, perKm100k: 600 },
      '1.2-Dualogic': { base: 6500, perYear: 600, perKm100k: 800 },
      '1.2-TCG': { base: 5500, perYear: 500, perKm100k: 700 },
      '1.3-Diesel': { base: 5200, perYear: 450, perKm100k: 650 }
    };

    const engineBudget = budgetByEngine[carData.engine as keyof typeof budgetByEngine];
    repairBudget = engineBudget.base;
    repairBudget += Math.max(0, carAge - 3) * engineBudget.perYear;
    repairBudget += (mileage / 100000) * engineBudget.perKm100k;

    if (!carData.beltChanged && mileage > 60000) {
      if (carData.engine === '0.9') repairBudget += 4000;
      else if (carData.engine === '1.2') repairBudget += 2800;
      else repairBudget += 2500;
    }

    if (year < 2015) repairBudget += Math.max(0, (2015 - year) * 400);

    repairBudget += 600;

    const finalScore = Math.max(0, Math.min(100, score));
    const verdict = finalScore >= 70 ? t.verdict.good : 
                   finalScore >= 50 ? t.verdict.ok : 
                   t.verdict.bad;

    setAnalysis({
      score: finalScore,
      warnings,
      recommendations,
      priceAnalysis,
      estimatedPrice: Math.round(basePrice),
      repairBudget,
      engine,
      verdict
    });
  };

  const generateSearchLinks = () => {
    const links = language === 'fr' ? [
      { site: 'Otomoto.pl', url: 'https://www.otomoto.pl/osobowe/fiat/500?search%5Bfilter_float_mileage%3Ato%5D=100000', desc: 'Toutes Fiat 500 < 100k km' },
      { site: 'Otomoto.pl', url: 'https://www.otomoto.pl/osobowe/fiat/500?search%5Bfilter_float_year%3Afrom%5D=2015&search%5Bfilter_float_mileage%3Ato%5D=80000', desc: 'Fiat 500 2015+ < 80k km' },
      { site: 'OLX.pl', url: 'https://www.olx.pl/motoryzacja/samochody/fiat/500/', desc: 'Fiat 500 sur OLX' },
      { site: 'Gratka.pl', url: 'https://www.gratka.pl/motoryzacja/fiat-500', desc: 'Fiat 500 sur Gratka' }
    ] : language === 'en' ? [
      { site: 'Otomoto.pl', url: 'https://www.otomoto.pl/osobowe/fiat/500?search%5Bfilter_float_mileage%3Ato%5D=100000', desc: 'All Fiat 500 < 100k km' },
      { site: 'Otomoto.pl', url: 'https://www.otomoto.pl/osobowe/fiat/500?search%5Bfilter_float_year%3Afrom%5D=2015&search%5Bfilter_float_mileage%3Ato%5D=80000', desc: 'Fiat 500 2015+ < 80k km' },
      { site: 'OLX.pl', url: 'https://www.olx.pl/motoryzacja/samochody/fiat/500/', desc: 'Fiat 500 on OLX' },
      { site: 'Gratka.pl', url: 'https://www.gratka.pl/motoryzacja/fiat-500', desc: 'Fiat 500 on Gratka' }
    ] : [
      { site: 'Otomoto.pl', url: 'https://www.otomoto.pl/osobowe/fiat/500?search%5Bfilter_float_mileage%3Ato%5D=100000', desc: 'Wszystkie Fiat 500 < 100 tys. km' },
      { site: 'Otomoto.pl', url: 'https://www.otomoto.pl/osobowe/fiat/500?search%5Bfilter_float_year%3Afrom%5D=2015&search%5Bfilter_float_mileage%3Ato%5D=80000', desc: 'Fiat 500 2015+ < 80 tys. km' },
      { site: 'OLX.pl', url: 'https://www.olx.pl/motoryzacja/samochody/fiat/500/', desc: 'Fiat 500 na OLX' },
      { site: 'Gratka.pl', url: 'https://www.gratka.pl/motoryzacja/fiat-500', desc: 'Fiat 500 na Gratka' }
    ];
    setSearchResults(links);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end mb-4 gap-2">
          <button
            onClick={() => setLanguage('fr')}
            className={`px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition ${
              language === 'fr' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Globe className="w-4 h-4" />
            Français
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition ${
              language === 'en' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Globe className="w-4 h-4" />
            English
          </button>
          <button
            onClick={() => setLanguage('pl')}
            className={`px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition ${
              language === 'pl' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Globe className="w-4 h-4" />
            Polski
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Car className="w-10 h-10 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-800">{t.title}</h1>
          </div>
          
          <p className="text-gray-600 mb-6">{t.subtitle}</p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">{t.price}</label>
              <input
                type="number"
                value={carData.price}
                onChange={(e) => setCarData({...carData, price: e.target.value})}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none"
                placeholder="25000"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">{t.mileage}</label>
              <input
                type="number"
                value={carData.mileage}
                onChange={(e) => setCarData({...carData, mileage: e.target.value})}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none"
                placeholder="75000"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">{t.year}</label>
              <input
                type="number"
                value={carData.year}
                onChange={(e) => setCarData({...carData, year: e.target.value})}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none"
                placeholder="2016"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">{t.engine}</label>
              <select
                value={carData.engine}
                onChange={(e) => setCarData({...carData, engine: e.target.value})}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none"
              >
                <option value="1.2">1.2 8V (69 KM) - {language === 'fr' ? 'Essence' : language === 'en' ? 'Petrol' : 'Benzyna'} ⭐7/10</option>
                <option value="0.9">0.9 TwinAir (85 KM) - {language === 'fr' ? 'Essence' : language === 'en' ? 'Petrol' : 'Benzyna'} ⚠️4/10</option>
                <option value="1.4">1.4 16V (100 KM) - {language === 'fr' ? 'Essence' : language === 'en' ? 'Petrol' : 'Benzyna'} ⭐⭐8/10</option>
                <option value="1.2-Dualogic">1.2 Dualogic (69 KM auto) - {language === 'fr' ? 'Automatique' : language === 'en' ? 'Automatic' : 'Automatyczna'} ⚠️4/10</option>
                <option value="1.2-TCG">1.2 TCG Turbo (105 KM) - {language === 'fr' ? 'Essence' : language === 'en' ? 'Petrol' : 'Benzyna'} ⭐6/10</option>
                <option value="1.3-Diesel">1.3 MultiJet Diesel (75 KM) - {language === 'fr' ? 'Diesel' : language === 'en' ? 'Diesel' : 'Diesel'} ⭐7/10</option>
              </select>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={carData.beltChanged}
                onChange={(e) => setCarData({...carData, beltChanged: e.target.checked})}
                className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
              />
              <span className="text-gray-700 font-medium">{t.beltChanged}</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={carData.serviceHistory}
                onChange={(e) => setCarData({...carData, serviceHistory: e.target.checked})}
                className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
              />
              <span className="text-gray-700 font-medium">{t.serviceHistory}</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={carData.accidents}
                onChange={(e) => setCarData({...carData, accidents: e.target.checked})}
                className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
              />
              <span className="text-gray-700 font-medium">{t.accidents}</span>
            </label>
          </div>

          <div className="flex gap-4">
            <button
              onClick={analyzeValue}
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2"
            >
              <Calculator className="w-5 h-5" />
              {t.analyzeBtn}
            </button>

            <button
              onClick={generateSearchLinks}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" />
              {t.searchBtn}
            </button>
          </div>
        </div>

        {searchResults.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Search className="w-6 h-6 text-green-600" />
              {t.searchLinksTitle}
            </h2>
            <div className="space-y-3">
              {searchResults.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-green-50 hover:bg-green-100 rounded-lg transition border-2 border-green-200"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold text-green-700">{link.site}</span>
                      <p className="text-gray-600 text-sm">{link.desc}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-green-600" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {analysis && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{t.analysisTitle}</h2>

            <div className="mb-6 p-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-semibold">{t.globalScore}</span>
                <span className="text-4xl font-bold">{analysis.score}/100</span>
              </div>
              <div className="w-full bg-white/30 rounded-full h-3">
                <div
                  className="bg-white h-3 rounded-full transition-all duration-500"
                  style={{ width: `${analysis.score}%` }}
                />
              </div>
              <p className="mt-3 text-xl font-bold">{analysis.verdict}</p>
            </div>

            <div className="mb-6 p-5 bg-blue-50 rounded-lg border-2 border-blue-200">
              <h3 className="font-bold text-lg mb-2 text-blue-900">{t.priceAnalysis}</h3>
              <p className="text-blue-800 font-semibold mb-2">{analysis.priceAnalysis}</p>
              <p className="text-gray-700">{t.estimatedPrice} <span className="font-bold text-indigo-600">{analysis.estimatedPrice.toLocaleString()} PLN</span></p>
            </div>

            <div className="mb-6 p-5 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-gray-800">{t.motorTitle} {analysis.engine.name}</h3>
              <div className="mb-3">
                <p className="text-sm font-semibold text-gray-600 mb-1">{t.reliability}</p>
                <div className="flex gap-1">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-3 w-8 rounded ${i < analysis.engine.reliability ? 'bg-green-500' : 'bg-gray-300'}`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                    <XCircle className="w-4 h-4" />
                    {t.weakPoints}
                  </p>
                  <ul className="space-y-1">
                    {analysis.engine.issues[language].map((issue, i) => (
                      <li key={i} className="text-sm text-gray-700">• {issue}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    {t.strengths}
                  </p>
                  <ul className="space-y-1">
                    {analysis.engine.positives[language].map((pos, i) => (
                      <li key={i} className="text-sm text-gray-700">• {pos}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {analysis.warnings.length > 0 && (
              <div className="mb-6 p-5 bg-red-50 rounded-lg border-2 border-red-200">
                <h3 className="font-bold text-lg mb-3 text-red-900 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  {t.warnings}
                </h3>
                <ul className="space-y-2">
                  {analysis.warnings.map((warning, i) => (
                    <li key={i} className="text-red-800">⚠️ {warning}</li>
                  ))}
                </ul>
              </div>
            )}

            {analysis.recommendations.length > 0 && (
              <div className="mb-6 p-5 bg-green-50 rounded-lg border-2 border-green-200">
                <h3 className="font-bold text-lg mb-3 text-green-900 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  {t.positives}
                </h3>
                <ul className="space-y-2">
                  {analysis.recommendations.map((rec, i) => (
                    <li key={i} className="text-green-800">{rec}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="p-5 bg-yellow-50 rounded-lg border-2 border-yellow-200">
              <h3 className="font-bold text-lg mb-2 text-yellow-900">{t.repairBudget}</h3>
              <p className="text-yellow-800">
                {t.repairBudgetText} <span className="font-bold text-2xl text-orange-600">{analysis.repairBudget.toLocaleString()} PLN</span> {t.repairBudgetSub}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                {t.repairBudgetDetail}
              </p>
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-xl p-8 mt-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">✅ {t.checklistTitle}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-indigo-600 mb-3">{t.mechanical}</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>☐ {t.checklistItems.noSmoke}</li>
                <li>☐ {t.checklistItems.oilLevel}</li>
                <li>☐ {t.checklistItems.roadTest}</li>
                <li>☐ {t.checklistItems.clutch}</li>
                <li>☐ {t.checklistItems.temperature}</li>
                <li>☐ {t.checklistItems.noLeaks}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-indigo-600 mb-3">{t.bodyInterior}</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>☐ {t.checklistItems.rust}</li>
                <li>☐ {t.checklistItems.electric}</li>
                <li>☐ {t.checklistItems.ac}</li>
                <li>☐ {t.checklistItems.humidity}</li>
                <li>☐ {t.checklistItems.obd}</li>
                <li>☐ {t.checklistItems.history}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fiat500Analyzer;
