// Data from https://www.tycho.pitt.edu/data/
// Original publication: Battling Infectious Diseases in the 20th Century: The Impact of Vaccines by Tynan DeBold and Dov Friedman.
export type Dataset = { x: number; y: string; value: number | null }[]
export type Dataset_ = { x: number; y: string; value: number | null }[]
export const data:Dataset = [
  {"x":2001,"y":"Enero","value":670},
  {"x":2001,"y":"Febrero","value":344,},
  {"x":2001,"y":"Marzo","value":407,},
  {"x":2001,"y":"Abril","value":432,},
  {"x":2001,"y":"Mayo","value":447,},
  {"x":2001,"y":"Junio","value":528,},
  {"x":2001,"y":"Julio","value":504,},
  {"x":2001,"y":"Agosto","value":519,},
  {"x":2001,"y":"Septiembre","value":538,},
  {"x":2001,"y":"Octubre","value":592},
  {"x":2001,"y":"Noviembre","value":615},
  {"x":2001,"y":"Diciembre","value":680},
  {"x":2002,"y":"Enero","value":1488},
  {"x":2002,"y":"Febrero","value":1079},
  {"x":2002,"y":"Marzo","value":1788},
  {"x":2002,"y":"Abril","value":14055},
  {"x":2002,"y":"Mayo","value":42884},
  {"x":2002,"y":"Junio","value":42801},
  {"x":2002,"y":"Julio","value":46006},
  {"x":2002,"y":"Agosto","value":44215},
  {"x":2002,"y":"Septiembre","value":42383},
  {"x":2002,"y":"Octubre","value":43142},
  {"x":2002,"y":"Noviembre","value":37148},
  {"x":2002,"y":"Diciembre","value":37172},
  {"x":2003,"y":"Enero","value":36720},
  {"x":2003,"y":"Febrero","value":32508},
  {"x":2003,"y":"Marzo","value":38646},
  {"x":2003,"y":"Abril","value":39783},
  {"x":2003,"y":"Mayo","value":41188},
  {"x":2003,"y":"Junio","value":40812},
  {"x":2003,"y":"Julio","value":43414},
  {"x":2003,"y":"Agosto","value":44269},
  {"x":2003,"y":"Septiembre","value":41423},
  {"x":2003,"y":"Octubre","value":43327},
  {"x":2003,"y":"Noviembre","value":38050},
  {"x":2003,"y":"Diciembre","value":35785},
  {"x":2004,"y":"Enero","value":35103},
  {"x":2004,"y":"Febrero","value":34066},
  {"x":2004,"y":"Marzo","value":39849},
  {"x":2004,"y":"Abril","value":38262},
  {"x":2004,"y":"Mayo","value":40770},
  {"x":2004,"y":"Junio","value":41131},
  {"x":2004,"y":"Julio","value":43234},
  {"x":2004,"y":"Agosto","value":43041},
  {"x":2004,"y":"Septiembre","value":41208},
  {"x":2004,"y":"Octubre","value":41519},
  {"x":2004,"y":"Noviembre","value":36839},
  {"x":2004,"y":"Diciembre","value":34317},
  {"x":2005,"y":"Enero","value":33867},
  {"x":2005,"y":"Febrero","value":31981},
  {"x":2005,"y":"Marzo","value":36901},
  {"x":2005,"y":"Abril","value":38865},
  {"x":2005,"y":"Mayo","value":40468},
  {"x":2005,"y":"Junio","value":40055},
  {"x":2005,"y":"Julio","value":41808},
  {"x":2005,"y":"Agosto","value":41543},
  {"x":2005,"y":"Septiembre","value":39628},
  {"x":2005,"y":"Octubre","value":39953},
  {"x":2005,"y":"Noviembre","value":35981},
  {"x":2005,"y":"Diciembre","value":32664},
  {"x":2006,"y":"Enero","value":36765},
  {"x":2006,"y":"Febrero","value":31296},
  {"x":2006,"y":"Marzo","value":36973},
  {"x":2006,"y":"Abril","value":36477},
  {"x":2006,"y":"Mayo","value":39611},
  {"x":2006,"y":"Junio","value":38812},
  {"x":2006,"y":"Julio","value":41551},
  {"x":2006,"y":"Agosto","value":40496},
  {"x":2006,"y":"Septiembre","value":37774},
  {"x":2006,"y":"Octubre","value":38654},
  {"x":2006,"y":"Noviembre","value":35569},
  {"x":2006,"y":"Diciembre","value":34136},
  {"x":2007,"y":"Enero","value":34112},
  {"x":2007,"y":"Febrero","value":27136},
  {"x":2007,"y":"Marzo","value":36346},
  {"x":2007,"y":"Abril","value":35623},
  {"x":2007,"y":"Mayo","value":40074},
  {"x":2007,"y":"Junio","value":38986},
  {"x":2007,"y":"Julio","value":40977},
  {"x":2007,"y":"Agosto","value":39831},
  {"x":2007,"y":"Septiembre","value":38246},
  {"x":2007,"y":"Octubre","value":39583},
  {"x":2007,"y":"Noviembre","value":34407},
  {"x":2007,"y":"Diciembre","value":31599},
  {"x":2008,"y":"Enero","value":33373},
  {"x":2008,"y":"Febrero","value":29039},
  {"x":2008,"y":"Marzo","value":33959},
  {"x":2008,"y":"Abril","value":35580},
  {"x":2008,"y":"Mayo","value":38045},
  {"x":2008,"y":"Junio","value":37682},
  {"x":2008,"y":"Julio","value":40470},
  {"x":2008,"y":"Agosto","value":40525},
  {"x":2008,"y":"Septiembre","value":37425},
  {"x":2008,"y":"Octubre","value":37871},
  {"x":2008,"y":"Noviembre","value":33546},
  {"x":2008,"y":"Diciembre","value":29398},
  {"x":2009,"y":"Enero","value":30249},
  {"x":2009,"y":"Febrero","value":28227},
  {"x":2009,"y":"Marzo","value":33662},
  {"x":2009,"y":"Abril","value":32559},
  {"x":2009,"y":"Mayo","value":35229},
  {"x":2009,"y":"Junio","value":34269},
  {"x":2009,"y":"Julio","value":35649},
  {"x":2009,"y":"Agosto","value":35813},
  {"x":2009,"y":"Septiembre","value":33857},
  {"x":2009,"y":"Octubre","value":33524},
  {"x":2009,"y":"Noviembre","value":31381},
  {"x":2009,"y":"Diciembre","value":28180},
  {"x":2010,"y":"Enero","value":29245},
  {"x":2010,"y":"Febrero","value":24946},
  {"x":2010,"y":"Marzo","value":32326},
  {"x":2010,"y":"Abril","value":31661},
  {"x":2010,"y":"Mayo","value":33400},
  {"x":2010,"y":"Junio","value":32711},
  {"x":2010,"y":"Julio","value":33499},
  {"x":2010,"y":"Agosto","value":34144},
  {"x":2010,"y":"Septiembre","value":31880},
  {"x":2010,"y":"Octubre","value":32383},
  {"x":2010,"y":"Noviembre","value":28883},
  {"x":2010,"y":"Diciembre","value":25233},
  {"x":2011,"y":"Enero","value":27216},
  {"x":2011,"y":"Febrero","value":22225},
  {"x":2011,"y":"Marzo","value":28690},
  {"x":2011,"y":"Abril","value":29104},
  {"x":2011,"y":"Mayo","value":31584},
  {"x":2011,"y":"Junio","value":32301},
  {"x":2011,"y":"Julio","value":33231},
  {"x":2011,"y":"Agosto","value":32580},
  {"x":2011,"y":"Septiembre","value":29932},
  {"x":2011,"y":"Octubre","value":30267},
  {"x":2011,"y":"Noviembre","value":27640},
  {"x":2011,"y":"Diciembre","value":27011},
  {"x":2012,"y":"Enero","value":26314},
  {"x":2012,"y":"Febrero","value":23870},
  {"x":2012,"y":"Marzo","value":28574},
  {"x":2012,"y":"Abril","value":27187},
  {"x":2012,"y":"Mayo","value":30111},
  {"x":2012,"y":"Junio","value":31097},
  {"x":2012,"y":"Julio","value":31986},
  {"x":2012,"y":"Agosto","value":30054},
  {"x":2012,"y":"Septiembre","value":27772},
  {"x":2012,"y":"Octubre","value":27985},
  {"x":2012,"y":"Noviembre","value":26045},
  {"x":2012,"y":"Diciembre","value":25242},
  {"x":2013,"y":"Enero","value":25541},
  {"x":2013,"y":"Febrero","value":21418},
  {"x":2013,"y":"Marzo","value":24986},
  {"x":2013,"y":"Abril","value":25535},
  {"x":2013,"y":"Mayo","value":28007},
  {"x":2013,"y":"Junio","value":27394},
  {"x":2013,"y":"Julio","value":28638},
  {"x":2013,"y":"Agosto","value":28670},
  {"x":2013,"y":"Septiembre","value":26355},
  {"x":2013,"y":"Octubre","value":25484},
  {"x":2013,"y":"Noviembre","value":23570},
  {"x":2013,"y":"Diciembre","value":21868},
  {"x":2014,"y":"Enero","value":20074},
  {"x":2014,"y":"Febrero","value":18045},
  {"x":2014,"y":"Marzo","value":22193},
  {"x":2014,"y":"Abril","value":22934},
  {"x":2014,"y":"Mayo","value":24875},
  {"x":2014,"y":"Junio","value":25458},
  {"x":2014,"y":"Julio","value":26577},
  {"x":2014,"y":"Agosto","value":25899},
  {"x":2014,"y":"Septiembre","value":23908},
  {"x":2014,"y":"Octubre","value":24008},
  {"x":2014,"y":"Noviembre","value":20780},
  {"x":2014,"y":"Diciembre","value":20985},
  {"x":2015,"y":"Enero","value":20973},
  {"x":2015,"y":"Febrero","value":16406},
  {"x":2015,"y":"Marzo","value":21685},
  {"x":2015,"y":"Abril","value":21734},
  {"x":2015,"y":"Mayo","value":23715},
  {"x":2015,"y":"Junio","value":23194},
  {"x":2015,"y":"Julio","value":24239},
  {"x":2015,"y":"Agosto","value":24823},
  {"x":2015,"y":"Septiembre","value":23136},
  {"x":2015,"y":"Octubre","value":23109},
  {"x":2015,"y":"Noviembre","value":20599},
  {"x":2015,"y":"Diciembre","value":21150},
  {"x":2016,"y":"Enero","value":20768},
  {"x":2016,"y":"Febrero","value":18753},
  {"x":2016,"y":"Marzo","value":22062},
  {"x":2016,"y":"Abril","value":21179},
  {"x":2016,"y":"Mayo","value":23553},
  {"x":2016,"y":"Junio","value":24081},
  {"x":2016,"y":"Julio","value":24860},
  {"x":2016,"y":"Agosto","value":24930},
  {"x":2016,"y":"Septiembre","value":23702},
  {"x":2016,"y":"Octubre","value":23765},
  {"x":2016,"y":"Noviembre","value":21748},
  {"x":2016,"y":"Diciembre","value":20395},
  {"x":2017,"y":"Enero","value":22169},
  {"x":2017,"y":"Febrero","value":19321},
  {"x":2017,"y":"Marzo","value":20580},
  {"x":2017,"y":"Abril","value":21708},
  {"x":2017,"y":"Mayo","value":23394},
  {"x":2017,"y":"Junio","value":23876},
  {"x":2017,"y":"Julio","value":24879},
  {"x":2017,"y":"Agosto","value":24744},
  {"x":2017,"y":"Septiembre","value":22853},
  {"x":2017,"y":"Octubre","value":22932},
  {"x":2017,"y":"Noviembre","value":21513},
  {"x":2017,"y":"Diciembre","value":21114},
  {"x":2018,"y":"Enero","value":20560},
  {"x":2018,"y":"Febrero","value":17366},
  {"x":2018,"y":"Marzo","value":21252},
  {"x":2018,"y":"Abril","value":21159},
  {"x":2018,"y":"Mayo","value":24754},
  {"x":2018,"y":"Junio","value":24258},
  {"x":2018,"y":"Julio","value":25284},
  {"x":2018,"y":"Agosto","value":25477},
  {"x":2018,"y":"Septiembre","value":23122},
  {"x":2018,"y":"Octubre","value":22856},
  {"x":2018,"y":"Noviembre","value":20693},
  {"x":2018,"y":"Diciembre","value":22008},
  {"x":2019,"y":"Enero","value":19740},
  {"x":2019,"y":"Febrero","value":18438},
  {"x":2019,"y":"Marzo","value":20449},
  {"x":2019,"y":"Abril","value":21036},
  {"x":2019,"y":"Mayo","value":23676},
  {"x":2019,"y":"Junio","value":23636},
  {"x":2019,"y":"Julio","value":24878},
  {"x":2019,"y":"Agosto","value":24433},
  {"x":2019,"y":"Septiembre","value":22467},
  {"x":2019,"y":"Octubre","value":21720},
  {"x":2019,"y":"Noviembre","value":19976},
  {"x":2019,"y":"Diciembre","value":20816},
  {"x":2020,"y":"Enero","value":19924},
  {"x":2020,"y":"Febrero","value":18196},
  {"x":2020,"y":"Marzo","value":16747},
  {"x":2020,"y":"Abril","value":12916},
  {"x":2020,"y":"Mayo","value":17603},
  {"x":2020,"y":"Junio","value":17662},
  {"x":2020,"y":"Julio","value":19638},
  {"x":2020,"y":"Agosto","value":19912},
  {"x":2020,"y":"Septiembre","value":17939},
  {"x":2020,"y":"Octubre","value":18440},
  {"x":2020,"y":"Noviembre","value":16645},
  {"x":2020,"y":"Diciembre","value":16502},
  {"x":2021,"y":"Enero","value":16167},
  {"x":2021,"y":"Febrero","value":13082},
  {"x":2021,"y":"Marzo","value":16101},
  {"x":2021,"y":"Abril","value":15568},
  {"x":2021,"y":"Mayo","value":17798},
  {"x":2021,"y":"Junio","value":18822},
  {"x":2021,"y":"Julio","value":19246},
  {"x":2021,"y":"Agosto","value":18537},
  {"x":2021,"y":"Septiembre","value":19231},
  {"x":2021,"y":"Octubre","value":19352},
  {"x":2021,"y":"Noviembre","value":17415},
  {"x":2021,"y":"Diciembre","value":17301},
  {"x":2022,"y":"Enero","value":15580},
  {"x":2022,"y":"Febrero","value":15222},
  {"x":2022,"y":"Marzo","value":18360},
  {"x":2022,"y":"Abril","value":17983},
  {"x":2022,"y":"Mayo","value":20118},
  {"x":2022,"y":"Junio","value":20746},
  {"x":2022,"y":"Julio","value":22244},
  {"x":2022,"y":"Agosto","value":22250},
  {"x":2022,"y":"Septiembre","value":22283},
  {"x":2022,"y":"Octubre","value":23143},
  {"x":2022,"y":"Noviembre","value":20730},
  {"x":2022,"y":"Diciembre","value":19813},
]

export const data_:Dataset_ = [
     {
    "x": 1,
    "y": "Lunes",
    "value": 100,
  },
  {
    "x": 1,
    "y": "Martes",
    "value": 334.9621212
  },
  {
    "x": 1,
    "y": "Miercoles",
    "value": 2.7109005
  },
  {
    "x": 1,
    "y": "Jueves",
    "value": 6.18974551
  },
  {
    "x": 1,
    "y": "Viernes",
    "value": 60.18974551
  },
  {
    "x": 1,
    "y": "Sabado",
    "value": 39.18974551
  },
  {
    "x": 1,
    "y": "Domingo",
    "value": 69.18974551
  },
  {
    "x": 2,
    "y": "Lunes",
    "value": 100
  },
  {
    "x": 2,
    "y": "Martes",
    "value": 334.9621212
  },
  {
    "x": 2,
    "y": "Miercoles",
    "value": 200.7109005
  },
  {
    "x": 2,
    "y": "Jueves",
    "value": 69.18974551
  },
  {
    "x": 2,
    "y": "Viernes",
    "value": 69.18974551
  },
  {
    "x": 2,
    "y": "Sabado",
    "value": 69.18974551
  },
  {
    "x": 2,
    "y": "Domingo",
    "value": 69.18974551
  },
  {
    "x": 3,
    "y": "Lunes",
    "value": 100
  },
  {
    "x": 3,
    "y": "Martes",
    "value": 334.9621212
  },
  {
    "x": 3,
    "y": "Miercoles",
    "value": 200.7109005
  },
  {
    "x": 3,
    "y": "Jueves",
    "value": 69.18974551
  },
  {
    "x": 3,
    "y": "Viernes",
    "value": 69.18974551
  },
  {
    "x": 3,
    "y": "Sabado",
    "value": 12.18974551
  },
  {
    "x": 3,
    "y": "Domingo",
    "value": 69.18974551
  },
  {
    "x": 4,
    "y": "Lunes",
    "value": 35.18974551
  },
  {
    "x": 4,
    "y": "Martes",
    "value": 354.9621212
  },
  {
    "x": 4,
    "y": "Miercoles",
    "value": 20.7109005
  },
  {
    "x": 4,
    "y": "Jueves",
    "value": 69.18974551
  },
  {
    "x": 4,
    "y": "Viernes",
    "value": 36.18974551
  },
  {
    "x": 4,
    "y": "Sabado",
    "value": 88.18974551
  },
  {
    "x": 4,
    "y": "Domingo",
    "value": 122.18974551
  },
  {
    "x": 5,
    "y": "Lunes",
    "value": 150.9621212
  },
  {
    "x": 5,
    "y": "Martes",
    "value": 334.9621212
  },
  {
    "x": 5,
    "y": "Miercoles",
    "value": 26.7109005
  },
  {
    "x": 5,
    "y": "Jueves",
    "value": 6.18974551
  },
  {
    "x": 5,
    "y": "Viernes",
    "value": 36.18974551
  },
  {
    "x": 5,
    "y": "Sabado",
    "value": 88.18974551
  },
  {
    "x": 5,
    "y": "Domingo",
    "value": 122.18974551
  },
  {
    "x": 6,
    "y": "Lunes",
    "value": 180.9621212
  },
  {
    "x": 6,
    "y": "Martes",
    "value": 280.9621212
  },
  {
    "x": 6,
    "y": "Miercoles",
    "value": 150.7109005
  },
  {
    "x": 6,
    "y": "Jueves",
    "value": 55.18974551
  },
  {
    "x": 6,
    "y": "Viernes",
    "value": 120.18974551
  },
  {
    "x": 6,
    "y": "Sabado",
    "value": 180.18974551
  },
  {
    "x": 6,
    "y": "Domingo",
    "value": 88.18974551
  },
  {
    "x": 7,
    "y": "Lunes",
    "value": 50.9621212
  },
  {
    "x": 7,
    "y": "Martes",
    "value": 84.9621212
  },
  {
    "x": 7,
    "y": "Miercoles",
    "value": 130.7109005
  },
  {
    "x": 7,
    "y": "Jueves",
    "value": 99.18974551
  },
  {
    "x": 7,
    "y": "Viernes",
    "value": 56.18974551
  },
  {
    "x": 7,
    "y": "Sabado",
    "value": 112.18974551
  },
  {
    "x": 7,
    "y": "Domingo",
    "value": 76.18974551
  },
  {
    "x": 8,
    "y": "Lunes",
    "value": 68.9621212
  },
  {
    "x": 8,
    "y": "Martes",
    "value": 112.9621212
  },
  {
    "x": 8,
    "y": "Miercoles",
    "value": 80.7109005
  },
  {
    "x": 8,
    "y": "Jueves",
    "value": 49.18974551
  },
  {
    "x": 8,
    "y": "Viernes",
    "value": 76.18974551
  },
  {
    "x": 8,
    "y": "Sabado",
    "value": 132.18974551
  },
  {
    "x": 8,
    "y": "Domingo",
    "value": 96.18974551
  },
  {
    "x": 9,
    "y": "Lunes",
    "value": 80.9621212
  },
  {
    "x": 9,
    "y": "Martes",
    "value": 90.9621212
  },
  {
    "x": 9,
    "y": "Miercoles",
    "value": 60.7109005
  },
  {
    "x": 9,
    "y": "Jueves",
    "value": 109.18974551
  },
  {
    "x": 9,
    "y": "Viernes",
    "value": 46.18974551
  },
  {
    "x": 9,
    "y": "Sabado",
    "value": 82.18974551
  },
  {
    "x": 9,
    "y": "Domingo",
    "value": 111.18974551
  },
  {
    "x": 10,
    "y": "Lunes",
    "value": 66.9621212
  },
  {
    "x": 10,
    "y": "Martes",
    "value": 77.9621212
  },
  {
    "x": 10,
    "y": "Miercoles",
    "value": 53.7109005
  },
  {
    "x": 10,
    "y": "Jueves",
    "value": 99.18974551
  },
  {
    "x": 10,
    "y": "Viernes",
    "value": 55.18974551
  },
  {
    "x": 10,
    "y": "Sabado",
    "value": 67.18974551
  },
  {
    "x": 10,
    "y": "Domingo",
    "value": 88.18974551
  },
  {
    "x": 11,
    "y": "Lunes",
    "value": 8.9621212
  },
  {
    "x": 11,
    "y": "Martes",
    "value": 20.9621212
  },
  {
    "x": 11,
    "y": "Miercoles",
    "value": 60.7109005
  },
  {
    "x": 11,
    "y": "Jueves",
    "value": 33.18974551
  },
  {
    "x": 11,
    "y": "Viernes",
    "value": 55.18974551
  },
  {
    "x": 11,
    "y": "Sabado",
    "value": 45.18974551
  },
  {
    "x": 11,
    "y": "Domingo",
    "value": 124.18974551
  },
  {
    "x": 12,
    "y": "Lunes",
    "value": 12.9621212
  },
  {
    "x": 12,
    "y": "Martes",
    "value": 47.9621212
  },
  {
    "x": 12,
    "y": "Miercoles",
    "value": 30.7109005
  },
  {
    "x": 12,
    "y": "Jueves",
    "value": 79.18974551
  },
  {
    "x": 12,
    "y": "Viernes",
    "value": 25.18974551
  },
  {
    "x": 12,
    "y": "Sabado",
    "value": 51.18974551
  },
  {
    "x": 12,
    "y": "Domingo",
    "value": 92.18974551
  },
  {
    "x": 1,
    "y": "Lunes",
    "value": 100
  },
  {
    "x": 1,
    "y": "Martes",
    "value": 334.9621212
  },
  {
    "x": 1,
    "y": "Miercoles",
    "value": 2.7109005
  },
  {
    "x": 1,
    "y": "Jueves",
    "value": 6.18974551
  },
  {
    "x": 1,
    "y": "Viernes",
    "value": 60.18974551
  },
  {
    "x": 1,
    "y": "Sabado",
    "value": 39.18974551
  },
  {
    "x": 1,
    "y": "Domingo",
    "value": 69.18974551
  },
  {
    "x": 2,
    "y": "Lunes",
    "value": 100
  },
  {
    "x": 2,
    "y": "Martes",
    "value": 334.9621212
  },
  {
    "x": 2,
    "y": "Miercoles",
    "value": 200.7109005
  },
  {
    "x": 2,
    "y": "Jueves",
    "value": 69.18974551
  },
  {
    "x": 2,
    "y": "Viernes",
    "value": 69.18974551
  },
  {
    "x": 2,
    "y": "Sabado",
    "value": 69.18974551
  },
  {
    "x": 2,
    "y": "Domingo",
    "value": 69.18974551
  },
  {
    "x": 3,
    "y": "Lunes",
    "value": 100
  },
  {
    "x": 3,
    "y": "Martes",
    "value": 334.9621212
  },
  {
    "x": 3,
    "y": "Miercoles",
    "value": 200.7109005
  },
  {
    "x": 3,
    "y": "Jueves",
    "value": 69.18974551
  },
  {
    "x": 3,
    "y": "Viernes",
    "value": 69.18974551
  },
  {
    "x": 3,
    "y": "Sabado",
    "value": 12.18974551
  },
  {
    "x": 3,
    "y": "Domingo",
    "value": 69.18974551
  },
  {
    "x": 4,
    "y": "Lunes",
    "value": 35.18974551
  },
  {
    "x": 4,
    "y": "Martes",
    "value": 354.9621212
  },
  {
    "x": 4,
    "y": "Miercoles",
    "value": 20.7109005
  },
  {
    "x": 4,
    "y": "Jueves",
    "value": 69.18974551
  },
  {
    "x": 4,
    "y": "Viernes",
    "value": 36.18974551
  },
  {
    "x": 4,
    "y": "Sabado",
    "value": 88.18974551
  },
  {
    "x": 4,
    "y": "Domingo",
    "value": 122.18974551
  },
  {
    "x": 5,
    "y": "Lunes",
    "value": 150.9621212
  },
  {
    "x": 5,
    "y": "Martes",
    "value": 334.9621212
  },
  {
    "x": 5,
    "y": "Miercoles",
    "value": 26.7109005
  },
  {
    "x": 5,
    "y": "Jueves",
    "value": 6.18974551
  },
  {
    "x": 5,
    "y": "Viernes",
    "value": 36.18974551
  },
  {
    "x": 5,
    "y": "Sabado",
    "value": 88.18974551
  },
  {
    "x": 5,
    "y": "Domingo",
    "value": 122.18974551
  },
  {
    "x": 6,
    "y": "Lunes",
    "value": 180.9621212
  },
  {
    "x": 6,
    "y": "Martes",
    "value": 280.9621212
  },
  {
    "x": 6,
    "y": "Miercoles",
    "value": 150.7109005
  },
  {
    "x": 6,
    "y": "Jueves",
    "value": 55.18974551
  },
  {
    "x": 6,
    "y": "Viernes",
    "value": 120.18974551
  },
  {
    "x": 6,
    "y": "Sabado",
    "value": 180.18974551
  },
  {
    "x": 6,
    "y": "Domingo",
    "value": 88.18974551
  },
  {
    "x": 7,
    "y": "Lunes",
    "value": 50.9621212
  },
  {
    "x": 7,
    "y": "Martes",
    "value": 84.9621212
  },
  {
    "x": 7,
    "y": "Miercoles",
    "value": 130.7109005
  },
  {
    "x": 7,
    "y": "Jueves",
    "value": 99.18974551
  },
  {
    "x": 7,
    "y": "Viernes",
    "value": 56.18974551
  },
  {
    "x": 7,
    "y": "Sabado",
    "value": 112.18974551
  },
  {
    "x": 7,
    "y": "Domingo",
    "value": 76.18974551
  },
  {
    "x": 8,
    "y": "Lunes",
    "value": 68.9621212
  },
  {
    "x": 8,
    "y": "Martes",
    "value": 112.9621212
  },
  {
    "x": 8,
    "y": "Miercoles",
    "value": 80.7109005
  },
  {
    "x": 8,
    "y": "Jueves",
    "value": 49.18974551
  },
  {
    "x": 8,
    "y": "Viernes",
    "value": 76.18974551
  },
  {
    "x": 8,
    "y": "Sabado",
    "value": 132.18974551
  },
  {
    "x": 8,
    "y": "Domingo",
    "value": 96.18974551
  },
  {
    "x": 9,
    "y": "Lunes",
    "value": 80.9621212
  },
  {
    "x": 9,
    "y": "Martes",
    "value": 90.9621212
  },
  {
    "x": 9,
    "y": "Miercoles",
    "value": 60.7109005
  },
  {
    "x": 9,
    "y": "Jueves",
    "value": 109.18974551
  },
  {
    "x": 9,
    "y": "Viernes",
    "value": 46.18974551
  },
  {
    "x": 9,
    "y": "Sabado",
    "value": 82.18974551
  },
  {
    "x": 9,
    "y": "Domingo",
    "value": 111.18974551
  },
  {
    "x": 10,
    "y": "Lunes",
    "value": 66.9621212
  },
  {
    "x": 10,
    "y": "Martes",
    "value": 77.9621212
  },
  {
    "x": 10,
    "y": "Miercoles",
    "value": 53.7109005
  },
  {
    "x": 10,
    "y": "Jueves",
    "value": 99.18974551
  },
  {
    "x": 10,
    "y": "Viernes",
    "value": 55.18974551
  },
  {
    "x": 10,
    "y": "Sabado",
    "value": 67.18974551
  },
  {
    "x": 10,
    "y": "Domingo",
    "value": 88.18974551
  },
  {
    "x": 11,
    "y": "Lunes",
    "value": 8.9621212
  },
  {
    "x": 11,
    "y": "Martes",
    "value": 20.9621212
  },
  {
    "x": 11,
    "y": "Miercoles",
    "value": 60.7109005
  },
  {
    "x": 11,
    "y": "Jueves",
    "value": 33.18974551
  },
  {
    "x": 11,
    "y": "Viernes",
    "value": 55.18974551
  },
  {
    "x": 11,
    "y": "Sabado",
    "value": 45.18974551
  },
  {
    "x": 11,
    "y": "Domingo",
    "value": 12.18974551
  },
  {
    "x": 12,
    "y": "Lunes",
    "value": 12.9621212
  },
  {
    "x": 12,
    "y": "Martes",
    "value": 47.9621212
  },
  {
    "x": 12,
    "y": "Miercoles",
    "value": 30.7109005
  },
  {
    "x": 12,
    "y": "Jueves",
    "value": 79.18974551
  },
  {
    "x": 12,
    "y": "Viernes",
    "value": 25.18974551
  },
  {
    "x": 12,
    "y": "Sabado",
    "value": 51.18974551
  },
  {
    "x": 12,
    "y": "Domingo",
    "value": 92.18974551
  },
  {
    "x": 1,
    "y": "Lunes",
    "value": 100
  },
  {
    "x": 1,
    "y": "Martes",
    "value": 334.9621212
  },
  {
    "x": 1,
    "y": "Miercoles",
    "value": 2.7109005
  },
  {
    "x": 1,
    "y": "Jueves",
    "value": 6.18974551
  },
  {
    "x": 1,
    "y": "Viernes",
    "value": 60.18974551
  },
  {
    "x": 1,
    "y": "Sabado",
    "value": 39.18974551
  },
  {
    "x": 1,
    "y": "Domingo",
    "value": 69.18974551
  },
  {
    "x": 2,
    "y": "Lunes",
    "value": 100
  },
  {
    "x": 2,
    "y": "Martes",
    "value": 334.9621212
  },
  {
    "x": 2,
    "y": "Miercoles",
    "value": 200.7109005
  },
  {
    "x": 2,
    "y": "Jueves",
    "value": 69.18974551
  },
  {
    "x": 2,
    "y": "Viernes",
    "value": 69.18974551
  },
  {
    "x": 2,
    "y": "Sabado",
    "value": 69.18974551
  },
  {
    "x": 2,
    "y": "Domingo",
    "value": 69.18974551
  },
  {
    "x": 3,
    "y": "Lunes",
    "value": 100
  },
  {
    "x": 3,
    "y": "Martes",
    "value": 334.9621212
  },
  {
    "x": 3,
    "y": "Miercoles",
    "value": 200.7109005
  },
  {
    "x": 3,
    "y": "Jueves",
    "value": 69.18974551
  },
  {
    "x": 3,
    "y": "Viernes",
    "value": 69.18974551
  },
  {
    "x": 3,
    "y": "Sabado",
    "value": 12.18974551
  },
  {
    "x": 3,
    "y": "Domingo",
    "value": 69.18974551
  },
  {
    "x": 4,
    "y": "Lunes",
    "value": 35.18974551
  },
  {
    "x": 4,
    "y": "Martes",
    "value": 354.9621212
  },
  {
    "x": 4,
    "y": "Miercoles",
    "value": 20.7109005
  },
  {
    "x": 4,
    "y": "Jueves",
    "value": 69.18974551
  },
  {
    "x": 4,
    "y": "Viernes",
    "value": 36.18974551
  },
  {
    "x": 4,
    "y": "Sabado",
    "value": 88.18974551
  },
  {
    "x": 4,
    "y": "Domingo",
    "value": 122.18974551
  },
  {
    "x": 5,
    "y": "Lunes",
    "value": 150.9621212
  },
  {
    "x": 5,
    "y": "Martes",
    "value": 334.9621212
  },
  {
    "x": 5,
    "y": "Miercoles",
    "value": 26.7109005
  },
  {
    "x": 5,
    "y": "Jueves",
    "value": 6.18974551
  },
  {
    "x": 5,
    "y": "Viernes",
    "value": 36.18974551
  },
  {
    "x": 5,
    "y": "Sabado",
    "value": 88.18974551
  },
  {
    "x": 5,
    "y": "Domingo",
    "value": 122.18974551
  },
  {
    "x": 6,
    "y": "Lunes",
    "value": 180.9621212
  },
  {
    "x": 6,
    "y": "Martes",
    "value": 280.9621212
  },
  {
    "x": 6,
    "y": "Miercoles",
    "value": 150.7109005
  },
  {
    "x": 6,
    "y": "Jueves",
    "value": 55.18974551
  },
  {
    "x": 6,
    "y": "Viernes",
    "value": 120.18974551
  },
  {
    "x": 6,
    "y": "Sabado",
    "value": 180.18974551
  },
  {
    "x": 6,
    "y": "Domingo",
    "value": 88.18974551
  },
  {
    "x": 7,
    "y": "Lunes",
    "value": 50.9621212
  },
  {
    "x": 7,
    "y": "Martes",
    "value": 84.9621212
  },
  {
    "x": 7,
    "y": "Miercoles",
    "value": 130.7109005
  },
  {
    "x": 7,
    "y": "Jueves",
    "value": 99.18974551
  },
  {
    "x": 7,
    "y": "Viernes",
    "value": 56.18974551
  },
  {
    "x": 7,
    "y": "Sabado",
    "value": 112.18974551
  },
  {
    "x": 7,
    "y": "Domingo",
    "value": 76.18974551
  },
  {
    "x": 8,
    "y": "Lunes",
    "value": 68.9621212
  },
  {
    "x": 8,
    "y": "Martes",
    "value": 112.9621212
  },
  {
    "x": 8,
    "y": "Miercoles",
    "value": 80.7109005
  },
  {
    "x": 8,
    "y": "Jueves",
    "value": 49.18974551
  },
  {
    "x": 8,
    "y": "Viernes",
    "value": 76.18974551
  },
  {
    "x": 8,
    "y": "Sabado",
    "value": 132.18974551
  },
  {
    "x": 8,
    "y": "Domingo",
    "value": 96.18974551
  },
  {
    "x": 9,
    "y": "Lunes",
    "value": 80.9621212
  },
  {
    "x": 9,
    "y": "Martes",
    "value": 90.9621212
  },
  {
    "x": 9,
    "y": "Miercoles",
    "value": 60.7109005
  },
  {
    "x": 9,
    "y": "Jueves",
    "value": 109.18974551
  },
  {
    "x": 9,
    "y": "Viernes",
    "value": 46.18974551
  },
  {
    "x": 9,
    "y": "Sabado",
    "value": 82.18974551
  },
  {
    "x": 9,
    "y": "Domingo",
    "value": 111.18974551
  },
  {
    "x": 10,
    "y": "Lunes",
    "value": 66.9621212
  },
  {
    "x": 10,
    "y": "Martes",
    "value": 77.9621212
  },
  {
    "x": 10,
    "y": "Miercoles",
    "value": 53.7109005
  },
  {
    "x": 10,
    "y": "Jueves",
    "value": 99.18974551
  },
  {
    "x": 10,
    "y": "Viernes",
    "value": 55.18974551
  },
  {
    "x": 10,
    "y": "Sabado",
    "value": 67.18974551
  },
  {
    "x": 10,
    "y": "Domingo",
    "value": 88.18974551
  },
  {
    "x": 11,
    "y": "Lunes",
    "value": 8.9621212
  },
  {
    "x": 11,
    "y": "Martes",
    "value": 20.9621212
  },
  {
    "x": 11,
    "y": "Miercoles",
    "value": 60.7109005
  },
  {
    "x": 11,
    "y": "Jueves",
    "value": 33.18974551
  },
  {
    "x": 11,
    "y": "Viernes",
    "value": 55.18974551
  },
  {
    "x": 11,
    "y": "Sabado",
    "value": 45.18974551
  },
  {
    "x": 11,
    "y": "Domingo",
    "value": 12.18974551
  },
  {
    "x": 12,
    "y": "Lunes",
    "value": 12.9621212
  },
  {
    "x": 12,
    "y": "Martes",
    "value": 47.9621212
  },
  {
    "x": 12,
    "y": "Miercoles",
    "value": 30.7109005
  },
  {
    "x": 12,
    "y": "Jueves",
    "value": 79.18974551
  },
  {
    "x": 12,
    "y": "Viernes",
    "value": 25.18974551
  },
  {
    "x": 12,
    "y": "Sabado",
    "value": 51.18974551
  },
  {
    "x": 12,
    "y": "Domingo",
    "value": 251
  },
]