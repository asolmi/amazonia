
const getData = () => {
  const map_api =  {
    "sesion8": [
      {
        "author": "Duarte Pacheco Pereira",
        "title": "Lineas basadas en el tratado de Tordesillas",
        "year": 1494,
        "source": "http://www.brasilviajesturismo.com/historia/tratado-de-tordesillas.htm ",
        "img_number_map": "8Map125.jpg"
      },
      {
        "author": "Anville, Jean-Baptiste Bourguignon d' (1697-1782). Cartographe",
        "title": "Amérique méridionale publiée sous les auspices de Monseigneur le Duc d'Orléans premier Prince de sang / par le S.r d'Anville",
        "year": 1748,
        "source": "https://gallica.bnf.fr/ark:/12148/btv1b531776044/f1.item.r=amerique%20meridionale%20amerique%20meridionale.zoom",
        "img_number_map": "8Map126.jpeg"
      },
      {
        "author": "Mapa das Cortes",
        "title": "Mapa dos confins do Brazil com as terras da Coroa da Espanha na America Meridional...",
        "year": 1719,
        "source": "http://objdigital.bn.br/objdigital2/acervo_digital/div_cartografia/cart1004807/cart1004807.pdf",
        "img_number_map": "8Map127.jpg"
      },
      {
        "author": "Cruz Cano y Olmedilla, Juan de la Ricarte, Hippolytus",
        "title": "Composite: (Sheets 1-8) Mapa Geografico De America Meridional.",
        "year": 1775,
        "source": "https://media.davidrumsey.com/rumsey/Size4/D5005/6931010.jpg",
        "img_number_map": "8Map128.jpg"
      },
      {
        "author": "Francisco requena",
        "title": "norman b. leventhal map & education center",
        "year": 1779,
        "source": "https://fedora.digitalcommonwealth.org/fedora/objects/commonwealth:6t053s19j/datastreams/access800/content",
        "img_number_map": "8Map129.jpg"
      },
      {
        "author": "Francisco requena",
        "title": "Mapa de parte de los virreynatos de Buenos Aires, Lima, Sta. Fe y capitania gral. de Caracas en la America meridional con las colonias portuguesas limitrofes para acompañar al proyecto y reflexiones sobre la mejor demarcacion de limites entre los dominios de ambas coronas dispuesto y construido",
        "year": 1779,
        "source": "https://tile.loc.gov/image-services/iiif/service:gmd:gmd5:g5200:g5200:ct000330/full/pct:25/0/default.jpg",
        "img_number_map": "8Map130.jpg"
      },
      {
        "author": "Antonio Pires da Silva Pontes Leme",
        "title": "Carta Geografica de Projeção Espherica da Nova Lusitania ou America portuguesa e Estado do Brazil",
        "year": 1797,
        "source": "https://www.researchgate.net/figure/Figura-14-Carta-Geografica-de-Projecao-Espherica-da-Nova-Lusitania-ou-America-portuguesa_fig3_43531068",
        "img_number_map": "8Map131.png"
      },
      {
        "author": "António Pereir",
        "title": "Early representation of Newfoundland, Lower California, the Amazon, and the Ladrones",
        "year": 1545,
        "source": "https://jcb.lunaimaging.com/luna/servlet/detail/JCBMAPS~1~1~1673~102490002:-Early-representation-of-Newfoundla",
        "img_number_map": "8Map132.jpg"
      },
      {
        "author": "Diego Gutierrez",
        "title": "Americae sive qvartae orbis partis nova et exactissima descriptio",
        "year": 1562,
        "source": "https://www.loc.gov/resource/g3290.ct000342?r=-0.485,-0.022,1.967,1.135,0",
        "img_number_map": "8Map133.jpg"
      },
      {
        "author": "Benito de Acosta, conocido en portugués como Bento da Costa",
        "title": "Planta del río Amazonas desde Quito hasta su desembocadura, elaborado a partir de un original del piloto Benito de Acosta",
        "year": 1638,
        "source": "https://journals.openedition.org/terrabrasilis/docannexe/image/6974/img-3.jpg",
        "img_number_map": "8Map134_1.jpg"
      },
      {
        "author": "Don Germán de Aguirre, encomendada por Jiménez de la Espada para su libro y para el Boletín de la Sociedad Geográfica de Madrid",
        "title": "Reproducción del mapa de Benito de Acosta en el libro de Jiménez de la Espada",
        "year": 1889,
        "source": "https://journals.openedition.org/terrabrasilis/docannexe/image/6974/img-4.jpg",
        "img_number_map": "8Map134_2.jpg"
      },
      {
        "author": "Sanson, Nicolas",
        "title": "Le Cours de la rivière des Amazones / dressé sur la relation du R.P. Christophe d'Acugna par le Sr Sanson d'Abbeville",
        "year": 1667,
        "source": "https://gallica.bnf.fr/ark:/12148/btv1b85967499/f1.highres",
        "img_number_map": "8Map135.jpeg"
      },
      {
        "author": "El Gran Rio Marañon o Amazonas, Con la Mission de la Compañia de Iesus / Geograficamente delineado por el Pe",
        "title": "El Gran Rio Marañon o Amazonas, Con la Mission de la Compañia de Iesus",
        "year": 1707,
        "source": "https://journals.openedition.org/terrabrasilis/docannexe/image/6883/img-1.jpg",
        "img_number_map": "8Map136.jpg"
      },
      {
        "author": "Delahaye, Guillaume-Nicolas",
        "title": "Carte du cours du Maragnon ou de la grande rivière des Amazones dans sa partie navigable depuis Jaen de Bracameros jusqu'à son embouchure et qui comprend la Province de Quito et de la cote de la Guyane depuis le Cap de Nord jusqu'à Essequebé.",
        "year": 1743,
        "source": "https://gallica.bnf.fr/ark:/12148/btv1b84922122/f1.highres",
        "img_number_map": "8Map137.jpeg"
      },
      {
        "author": "Maldonado, Pedro",
        "title": "Carta de la Provincia de Quito y de sus adjacentes",
        "year": 1750,
        "source": "https://tile.loc.gov/image-services/iiif/service:gmd:gmd5:g5300:g5300:ct000888/full/pct:25/0/default.jpg",
        "img_number_map": "8Map138.jpg"
      },
      {
        "author": "Simson, Alfred",
        "title": "Travels in the wilds of Ecuador, and the exploration of the Putumayo River",
        "year": 1877,
        "source": "https://archive.org/details/travelsinwildsof00sims/page/n13/mode/2up?view=theater",
        "img_number_map": "8Map139.jpg"
      },
      {
        "author": "Manuel Villavicencio",
        "title": "Carta corográfica de Ecuador",
        "year": 1858,
        "source": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Carta_del_Ecuador_1858.jpg",
        "img_number_map": "8Map140.jpg"
      },
      {
        "author": "Teodoro Wolf",
        "title": "Carta Geografica del Ecuador por Dr. Teodoro Wolf, publicada por orden del Supremo Gobierno de la Republica y Trabajada Bajo las Presidencias de los EE. Senores Dr. D.J.M. Placido Caamano y Dr. D. Antonio Flores",
        "year": 1892,
        "source": "https://www.davidrumsey.com/luna/servlet/workspace/handleMediaPlayer?qvq=&trs=&mi=&lunaMediaId=RUMSEY~8~1~4402~350011",
        "img_number_map": "8Map141.png"
      },
      {
        "author": "Bernardo Flemming",
        "title": "Mapa general del ecuador",
        "year": 1900,
        "source": "https://gallica.bnf.fr/ark:/12148/btv1b53029108w/f1.highres",
        "img_number_map": "8Map142.jpeg"
      },
      {
        "author": "Instituto Geografico Militar",
        "title": "Mapa geografico de la republica del eucador",
        "year": 1957,
        "source": "https://www.davidrumsey.com/luna/servlet/workspace/handleMediaPlayer?qvq=q%253AMapa%2bdel%2bEcuador%2bde%2b1957%253Bsort%253APub_List_No_InitialSort%252CPub_Date%252CPub_List_No%252CSeries_No%253Blc%253ARUMSEY%257E8%257E1&trs=1&mi=0&lunaMediaId=RUMSEY~8~1~232943~5509532",
        "img_number_map": "8Map143.png"
      },
      {
        "author": "Juan Morales y Eloy",
        "title": "Ecuador Atlas Histórico Geográfico (PDF pesado - PAGINA 58)",
        "year": 1942,
        "source": "https://biblioteca.armada.mil.ec/omeka-2.4.1/files/original/3009359eb452680347d767d3cd113737.pdf",
        "img_number_map": "8Map144.jpg"
      },
      {
        "author": "Aparicio Morata",
        "title": "Virreinato de Nueva Granada",
        "year": 1772,
        "source": "https://pbs.twimg.com/media/EnR2fDrWMAMYN_N?format=jpg&name=large",
        "img_number_map": "8Map145.jpg"
      },
      {
        "author": "Jose Manuel Restrepo",
        "title": "Carta de la republica de colombia",
        "year": 1827,
        "source": "https://www.davidrumsey.com/luna/servlet/workspace/handleMediaPlayer?qvq=q%253Acarta%2bde%2bla%2brepublica%2bde%2bcolombia%2b1827%253Bsort%253APub_List_No_InitialSort%252CPub_Date%252CPub_List_No%252CSeries_No%253Blc%253ARUMSEY%257E8%257E1&trs=13&mi=0&lunaMediaId=RUMSEY~8~1~20243~590076",
        "img_number_map": "8Map146.png"
      },
      {
        "author": "Joaquin Acosta",
        "title": "Mapa de la republica de la nueva granada dedicado al baron de humboldt",
        "year": 1847,
        "source": "https://gallica.bnf.fr/ark:/12148/btv1b53099646q/f1.item.r=mapa%20de%20la%20republica%20de%20la%20nueva%20granada%20dedicado%20al%20baron%20de%20humboldt%201847",
        "img_number_map": "8Map147.png"
      },
      {
        "author": "T.C. de Mosquera.",
        "title": "Carta de la Republica de N. Granada conforme a su ultima division politica",
        "year": 1852,
        "source": "https://collections.lib.uwm.edu/digital/collection/agdm/id/372",
        "img_number_map": "8Map148.png"
      },
      {
        "author": "Construida de Órden del Gobierno Jeneral con arreglo a los trabajos corográficos del Jeneral A. Codazzi",
        "title": "Carta Jeográfica de los Estados Unidos de Colombia Antigua Nueva Granada",
        "year": 1846,
        "source": "http://bdh-rd.bne.es/viewer.vm?id=0000040937",
        "img_number_map": "8Map149(3).jpg"
      },
      {
        "author": "Manuel ponce de leon",
        "title": "carta geografica de la parte oriental menos poblada del estado del cauca. construida con los datos de la comision corgrafica de orden del gobierno general",
        "year": 1864,
        "source": "https://www.internetculturale.it/jmms/iccuviewer/iccu.jsp?id=oai%3Awww.internetculturale.sbn.it%2FTeca%3A20%3ANT0000%3AN%3AIT_SGI_CASTA_3389&mode=all&teca=MagTeca+-+ICCU",
        "img_number_map": "8Map150.png"
      },
      {
        "author": "Agustín Codazzi",
        "title": "Carta de la República de Colombia dividida por departamentos en 1886",
        "year": 1890,
        "source": "https://upload.wikimedia.org/wikipedia/commons/3/33/AGHRC_%281890%29_-_Carta_XIII_-_Divisi%C3%B3n_pol%C3%ADtica_de_Colombia%2C_1886.jpg",
        "img_number_map": "8Map151.jpg"
      },
      {
        "author": "Vergara y Velasco",
        "title": "Nueva Carta geografica de Colombia",
        "year": 1906,
        "source": "https://gallica.bnf.fr/ark:/12148/btv1b84441905/f1.item.r=colombia%20velazco%20vergara",
        "img_number_map": "8Map152.png"
      },
      {
        "author": "Atlas de colombia eduardo acevedo latorre",
        "title": "Division territorial de 1908",
        "year": 1908,
        "source": "https://docplayer.es/docs-images/61/45754962/images/30-0.png",
        "img_number_map": "8Map153.jpg"
      },
      {
        "author": "Francisco Javier Vergara y Velasco",
        "title": "El cierre del congreso y asamblea afecta la division territorial",
        "year": 1905,
        "source": "http://catalogoenlinea.bibliotecanacional.gov.co/custom/web/content/mapoteca/fmapoteca_1284_fbnc_62/fmapoteca_1284_fbnc_62.html",
        "img_number_map": "8Map154.jpg"
      },
      {
        "author": "Francisco Javier Vergara y Velasco",
        "title": "Mapa de Colombia en 1908",
        "year": 1908,
        "source": "https://upload.wikimedia.org/wikipedia/commons/5/51/Mapa_de_Colombia_%281908%29.jpg",
        "img_number_map": "8Map155.jpg"
      },
      {
        "author": "Jorge Posada Callejas",
        "title": "Libro azul - the blue book (Mapa de colombia)",
        "year": 1918,
        "source": "https://archive.org/details/libroazuldecolom00posa/page/n209/mode/1up?q=210",
        "img_number_map": "8Map156.jpg"
      },
      {
        "author": "Milliet de Saint - adolph",
        "title": "Imperio do brasil",
        "year": 1845,
        "source": "https://www.flickr.com/photos/arquivonacionalbrasil/45184344734",
        "img_number_map": "8Map157.jpg"
      },
      {
        "author": "Conrado Jacob de Niemeyer",
        "title": "Carta corografica do imperio do brazil",
        "year": 1846,
        "source": "http://objdigital.bn.br/objdigital2/acervo_digital/div_cartografia/cart170429/cart170429.jpg",
        "img_number_map": "8Map158.jpg"
      },
      {
        "author": "Conrado Jacob de Niemeyer",
        "title": "Nova carta corographica do Imperio do Brazil",
        "year": 1857,
        "source": "https://gallica.bnf.fr/ark:/12148/btv1b53098527m?rk=21459;2",
        "img_number_map": "8Map159.jpeg"
      },
      {
        "author": "Conrado Jacob de Niemeyer",
        "title": "Nova carta chorographica do Imperio do Brazil",
        "year": 1867,
        "source": "http://objdigital.bn.br/objdigital2/acervo_digital/div_cartografia/cart171159/cart171159.jpg",
        "img_number_map": "8Map160.jpg"
      },
      {
        "author": "Duarte da ponte ribeiro",
        "title": "Carta do Império do Brasil : reduzida no Archivo Militar em conformidade da publicada pelo coronel Conrado Jacob de Niemeyer em 1846 e das especiaes das fronteiras com os estados limitrophes",
        "year": 1873,
        "source": "http://objdigital.bn.br/objdigital2/acervo_digital/div_cartografia/cart163386/cart163386.jpg",
        "img_number_map": "8Map161.jpg"
      },
      {
        "author": "Homem de Mello",
        "title": "Carta physica do Brazil mostrando os systhemas orographico e hydrographico",
        "year": 1875,
        "source": "https://www.raremaps.com/gallery/detail/32224mb/carta-physica-do-brazil-mostrando-os-systhemas-orographico-e-homem-de-mello",
        "img_number_map": "8Map162.png"
      },
      {
        "author": "Claudio Lomellino Carvalho y Honorio de Bicalho",
        "title": "Carta do Imperio do Brazil : indicando um plano geral para base da rede de viação",
        "year": 1882,
        "source": "http://objdigital.bn.br/objdigital2/acervo_digital/div_cartografia/cart230727/cart230727.jpg",
        "img_number_map": "8Map163.jpg"
      },
      {
        "author": "José Maria da Silva Paranhos, Barão do Rio Branco",
        "title": "Estados Unidos do Brazil",
        "year": 1897,
        "source": "http://objdigital.bn.br/objdigital2/acervo_digital/div_cartografia/cart161220/cart161220.jpg",
        "img_number_map": "8Map164.jpg"
      },
      {
        "author": "Clube de Engenharia (Rio de Janeiro, RJ)",
        "title": "Carta geographica do Brasil : em commemoração do primeiro centenário da independência (mapa del millonesimo)",
        "year": 1922,
        "source": "http://objdigital.bn.br/objdigital2/acervo_digital/div_cartografia/cart163357/cart163357.jpg",
        "img_number_map": "8Map165.jpg"
      },
      {
        "author": "Joaquin Soler",
        "title": "Plano General de las Montañas Orientales al Reyno del Peru pertenecientes a la Corona de España y confines de Portugal",
        "year": 1790,
        "source": "http://objdigital.bn.br/acervo_digital/div_cartografia/cart325606/cart325606.jpg",
        "img_number_map": "8Map166.jpg"
      },
      {
        "author": "Mariano Felipe Paz Soldan",
        "title": "Mapa general del perú",
        "year": 1865,
        "source": "https://www.davidrumsey.com/luna/servlet/workspace/handleMediaPlayer?qvq=q%253Amapa%2bgeneral%2bdel%2bperu%2b1865%253Bsort%253APub_List_No_InitialSort%252CPub_Date%252CPub_List_No%252CSeries_No%253Blc%253ARUMSEY%257E8%257E1&trs=6&mi=0&lunaMediaId=RUMSEY~8~1~20562~570087",
        "img_number_map": "8Map167.png"
      },
      {
        "author": "D.E. Larrabure y Unánue",
        "title": "Map of Peru / published by D.E. Larrabure y Unánue, Minister of Foreign Affairs",
        "year": 1903,
        "source": "https://collections.library.yale.edu/catalog/15821188",
        "img_number_map": "8Map168.jpg"
      },
      {
        "author": "Carlos Vallejos",
        "title": "El Perú en 1913",
        "year": 1913,
        "source": "http://www.bne.es/es/Micrositios/Guias/12Octubre/MapasAmerica/GaleriaMapas/DetalleImagen25.html",
        "img_number_map": "8Map169.jpg"
      },
      {
        "author": "servicio geografico del ejercito",
        "title": "Carta general del oriente peruano",
        "year": 1933,
        "source": "",
        "img_number_map": "8Map170.jpg"
      },
      {
        "author": "Ministério da Guerra Brasil",
        "title": "Estado do Amazonas : carta geográfica da fronteira do Alto Solimões entre o Brasil, Peru e Colombia",
        "year": 1940,
        "source": "https://journals.openedition.org/terrabrasilis/docannexe/image/7231/img-8.jpg",
        "img_number_map": "8Map171.jpg"
      }
     ],
    "sesion9": [      
      {
        "author": "Mapa das Cortes",
        "title": "Mapa dos confins do Brazil com as terras da Coroa da Espanha na America Meridional...",
        "year": 1719,
        "source": "http://objdigital.bn.br/objdigital2/acervo_digital/div_cartografia/cart1004807/cart1004807.pdf",
        "img_number_map": "8Map127.jpg"
      },
      {
        "author": "Mapa das Cortes",
        "title": "Mapa dos confins do Brazil com as terras da Coroa da Espanha na America Meridional...",
        "year": 1719,
        "source": "http://objdigital.bn.br/objdigital2/acervo_digital/div_cartografia/cart1004807/cart1004807.pdf",
        "img_number_map": "8Map127.jpg"
      },
    ]
   }

  return map_api
} 

export { getData }