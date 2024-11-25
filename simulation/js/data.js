// let test_data = [[11, 12, 13, 14, 15, 16, 17, 18], [21, 22, 23, 24, 25, 26, 27, 28], [31, 32, 33, 34, 35, 36, 37, 38]];
let N = 20;
let alpha_dd_options = [0.05, 0.01, 0.1];
let alpha = 0.05;
let X = [
    21,
    22,
    29,
    32,
    33,
    35,
    36,
    46,
    49,
    51,
    53,
    55,
    61,
    62,
    63,
    66,
    67,
    72,
    73,
    79
];
let Y = [
    -8.84273231918755,
    -24.468849656023906,
    -21.774610039951238,
    -18.403874069570012,
    -8.222949672697688,
    2.5688438197029164,
    0.20546185797980066,
    -14.449454734995836,
    -26.64728403147852,
    -37.429600577406546,
    -11.096988558352402,
    -2.766063629974683,
    -11.948258393671276,
    -4.879254866091603,
    -10.906687455921363,
    -2.943409549692074,
    -20.09639240653797,
    -3.8584230152976637,
    -16.51092216,
    -11.819103171727075
];
let beta0 = -0.25583352890885624;
let beta1 = -0.3323844050573288;
let Y2 = [
    -7.2359060351127615,
    -7.56829044017009,
    -9.894981275571393,
    -10.892134490743377,
    -11.224518895800706,
    -11.889287705915365,
    -12.221672110972694,
    -15.54551616154598,
    -16.542669376717967,
    -17.207438186832626,
    -17.87220699694728,
    -18.53697580706194,
    -20.53128223740591,
    -20.86366664246324,
    -21.19605104752057,
    -22.193204262692557,
    -22.525588667749886,
    -24.18751069303653,
    -24.51989509809386,
    -26.51420152843783
];
let epsilon = [
    -0.30073846505335916,
    -0.03399865343849451,
    0.34486913849658873,
    0.4284616538762027,
    -0.5548928584213816,
    -0.48635486246554616,
    0.23126806028238778,
    -0.358860241077436,
    -0.5109619515623478,
    -0.3712712912255913,
    0.730176280772022,
    -0.16861785256316109,
    -0.04708444353218866,
    0.24682230506982306,
    -0.2118348113670887,
    0.6979293993140001,
    0.2075327042631887,
    0.3134506201180849,
    0.5341188001677204,
    -0.6790579884936392
];
let act1_table_data = [
    [
        21,
        -8.8427,
        441,
        -185.697
    ],
    [
        22,
        -24.4688,
        484,
        -538.315
    ],
    [
        29,
        -21.7746,
        841,
        -631.464
    ],
    [
        32,
        -18.4039,
        1024,
        -588.924
    ],
    [
        33,
        -8.2229,
        1089,
        -271.357
    ],
    [
        35,
        2.5688,
        1225,
        89.91
    ],
    [
        36,
        0.2055,
        1296,
        7.397
    ],
    [
        46,
        -14.4495,
        2116,
        -664.675
    ],
    [
        49,
        -26.6473,
        2401,
        -1305.717
    ],
    [
        51,
        -37.4296,
        2601,
        -1908.91
    ],
    [
        53,
        -11.097,
        2809,
        -588.14
    ],
    [
        55,
        -2.7661,
        3025,
        -152.133
    ],
    [
        61,
        -11.9483,
        3721,
        -728.844
    ],
    [
        62,
        -4.8793,
        3844,
        -302.514
    ],
    [
        63,
        -10.9067,
        3969,
        -687.121
    ],
    [
        66,
        -2.9434,
        4356,
        -194.265
    ],
    [
        67,
        -20.0964,
        4489,
        -1346.458
    ],
    [
        72,
        -3.8584,
        5184,
        -277.806
    ],
    [
        73,
        -16.5109,
        5329,
        -1205.297
    ],
    [
        79,
        -11.8191,
        6241,
        -933.709
    ]
];
let act1_table_data_2 = [
    [
        21,
        -8.843,
        -29.25,
        855.563,
        3.872,
        14.991,
        -113.25,
        357.795,
        134423.324
    ],
    [
        22,
        -24.469,
        -28.25,
        798.063,
        -11.754,
        138.164,
        332.06,
        347.281,
        138197.789
    ],
    [
        29,
        -21.775,
        -21.25,
        451.563,
        -9.06,
        82.085,
        192.527,
        273.68,
        87293.623
    ],
    [
        32,
        -18.404,
        -18.25,
        333.063,
        -5.689,
        32.369,
        103.831,
        242.137,
        67881.695
    ],
    [
        33,
        -8.223,
        -17.25,
        297.563,
        4.492,
        20.174,
        -77.48,
        231.623,
        57526.047
    ],
    [
        35,
        2.569,
        -15.25,
        232.563,
        15.283,
        233.581,
        -233.071,
        210.594,
        43274.563
    ],
    [
        36,
        0.205,
        -14.25,
        203.063,
        12.92,
        166.926,
        -184.11,
        200.08,
        39949.784
    ],
    [
        46,
        -14.449,
        -4.25,
        18.063,
        -1.735,
        3.01,
        7.373,
        94.936,
        11965.261
    ],
    [
        49,
        -26.647,
        -1.25,
        1.563,
        -13.933,
        194.122,
        17.416,
        63.393,
        8107.313
    ],
    [
        51,
        -37.43,
        0.75,
        0.563,
        -24.715,
        610.835,
        -18.536,
        42.365,
        6367.12
    ],
    [
        53,
        -11.097,
        2.75,
        7.563,
        1.618,
        2.616,
        4.448,
        21.336,
        1051.894
    ],
    [
        55,
        -2.766,
        4.75,
        22.563,
        9.948,
        98.972,
        47.255,
        0.307,
        9.445
    ],
    [
        61,
        -11.948,
        10.75,
        115.563,
        0.766,
        0.587,
        8.237,
        -62.779,
        2583.751
    ],
    [
        62,
        -4.879,
        11.75,
        138.063,
        7.835,
        61.391,
        92.064,
        -73.293,
        4680.47
    ],
    [
        63,
        -10.907,
        12.75,
        162.563,
        1.808,
        3.268,
        23.05,
        -83.808,
        5314.538
    ],
    [
        66,
        -2.943,
        15.75,
        248.063,
        9.771,
        95.475,
        153.895,
        -115.351,
        12635.38
    ],
    [
        67,
        -20.096,
        16.75,
        280.563,
        -7.382,
        54.492,
        -123.646,
        -125.865,
        11186.991
    ],
    [
        72,
        -3.858,
        21.75,
        473.063,
        8.856,
        78.431,
        192.62,
        -178.437,
        30477.581
    ],
    [
        73,
        -16.511,
        22.75,
        517.563,
        -3.796,
        14.413,
        -86.368,
        -188.951,
        29735.604
    ],
    [
        79,
        -11.819,
        28.75,
        826.563,
        0.895,
        0.802,
        25.743,
        -252.037,
        57704.718
    ]
];
let sum_X = 1005; // sum of X
let sum_Y = -254.2905; // sum of Y
let sum_XX = 56485; // sum of X^2
let sum_XY = 12413.932; // sum of X*Y
let mat_A = [[56485, 1005], [1005, 20]];
let mat_x = [0.0608599, -15.77274185];
let mat_B = [-12414.039, -254.2905];
let X_avg = 50.25;
let Y_avg = -12.714;
//summations
let sxx = 5983.760000000001;
let syy = 1906.704;
let sxy = 364.02000000000004;
let ssr = 1884.5550000000003;
let smres = 104.69750000000002;
let r2 = 0.01161638093799544;
//to
let to = 0.459971;
// n-2, alpha = 0.1, alpha = 0.05, alpha = 0.01
let hypothesis_table = [
    [18, 1.734, 2.101, 2.878],
    [19, 1.729, 2.093, 2.861],
    [20, 1.725, 2.086, 2.845],
    [21, 1.721, 2.080, 2.831],
    [22, 1.717, 2.074, 2.819],
    [23, 1.714, 2.069, 2.819],
    [24, 1.711, 2.064, 2.797],
    [25, 1.708, 2.060, 2.787],
    [26, 1.706, 2.056, 2.779],
    [27, 1.703, 2.052, 2.771],
    [28, 1.701, 2.048, 2.763]
];
let t_n_2 = 2.101;
//hypothesis testing result;
let hypo_test_reject_op = 1;
//=====================Activity 2 varaibles======================================
let act2_N = 20;
let act2_X = X;
let act2_beta0 = -0.25583352890885624;
let act2_beta1 = -332.3844050573288;
let act2_Y2 = [
    -6980.328339732814,
    -7312.712744790143,
    -9639.403580191445,
    -10636.55679536343,
    -10968.941200420759,
    -11633.710010535417,
    -11966.094415592746,
    -15289.938466166035,
    -16287.09168133802,
    -16951.86049145268,
    -17616.629301567336,
    -18281.398111681996,
    -20275.704542025967,
    -20608.0889470833,
    -20940.473352140627,
    -21937.62656731261,
    -22270.010972369942,
    -23931.932997656586,
    -24264.317402713914,
    -26258.62383305789
];
let act2_epsilon = [
    -0.12491007908842633,
    -0.5360482380737388,
    -0.5791382987560848,
    0.5809808415184878,
    0.21996981842401309,
    0.6566043069926757,
    0.6919083867564264,
    0.10205242032535189,
    -0.7022414317221796,
    0.63137006383773,
    0.38520876691484096,
    -0.25849303155336867,
    -0.604334267764298,
    -0.7978766845639762,
    0.343198902864033,
    -0.03302825984747915,
    -0.5599437875947711,
    -0.4912263052744159,
    0.4099815060128227,
    0.4157469171886914
];
let act2_Y = [
    -9478.52992150134,
    -18033.677506264918,
    -21222.169555313143,
    983.060035006325,
    -6569.544831940497,
    1498.3761293180978,
    1872.0733195357825,
    -13248.890059658997,
    -30331.920315781612,
    -4324.459214698081,
    -9912.453963270516,
    -23451.25874274937,
    -32362.38989731193,
    -36565.62263836282,
    -14076.495294859968,
    -22598.191764262192,
    -33468.886724265365,
    -33756.4591031449,
    -16064.68728245746,
    -17943.685489284064
];
let act2_all_data = [
    [
        21,
        -9478.53,
        441,
        -199049.128
    ],
    [
        22,
        -18033.678,
        484,
        -396740.905
    ],
    [
        29,
        -21222.17,
        841,
        -615442.917
    ],
    [
        32,
        983.06,
        1024,
        31457.921
    ],
    [
        33,
        -6569.545,
        1089,
        -216794.979
    ],
    [
        35,
        1498.376,
        1225,
        52443.165
    ],
    [
        36,
        1872.073,
        1296,
        67394.64
    ],
    [
        46,
        -13248.89,
        2116,
        -609448.943
    ],
    [
        49,
        -30331.92,
        2401,
        -1486264.095
    ],
    [
        51,
        -4324.459,
        2601,
        -220547.42
    ],
    [
        53,
        -9912.454,
        2809,
        -525360.06
    ],
    [
        55,
        -23451.259,
        3025,
        -1289819.231
    ],
    [
        61,
        -32362.39,
        3721,
        -1974105.784
    ],
    [
        62,
        -36565.623,
        3844,
        -2267068.604
    ],
    [
        63,
        -14076.495,
        3969,
        -886819.204
    ],
    [
        66,
        -22598.192,
        4356,
        -1491480.656
    ],
    [
        67,
        -33468.887,
        4489,
        -2242415.411
    ],
    [
        72,
        -33756.459,
        5184,
        -2430465.055
    ],
    [
        73,
        -16064.687,
        5329,
        -1172722.172
    ],
    [
        79,
        -17943.685,
        6241,
        -1417551.154
    ]
];
//sum of X, Y, X2 and XY
let act2_sum_X = 1005;
let act2_sum_Y = -339055.814;
let act2_sum_X2 = 56485;
let act2_sum_XY = -19290799.992;
//matrices
let act2_mat_A = [
    [
        56485,
        1005
    ],
    [
        1005,
        20
    ]
];
let act2_mat_x = [
    -376.56074175893,
    1969.3865733862322
];
let act2_mat_B = [
    -19290799.992,
    -339055.814
];
//average variables
let act2_X_avg = 50.25;
let act2_Y_avg = -16952.79064;
//act2 sum of diff table data
let act2_table_data_2 = [
    [
        21,
        -9478.53,
        -29.25,
        855.563,
        7474.261,
        55864573.304,
        -218622.126,
        -5938.389,
        12532597.719
    ],
    [
        22,
        -18033.678,
        -28.25,
        798.063,
        -1080.887,
        1168316.415,
        30535.054,
        -6314.95,
        137328580.335
    ],
    [
        29,
        -21222.17,
        -21.25,
        451.563,
        -4269.379,
        18227596.313,
        90724.302,
        -8950.875,
        150584671.594
    ],
    [
        32,
        983.06,
        -18.25,
        333.063,
        17935.851,
        321694739.474,
        -327329.275,
        -10080.557,
        122403625.502
    ],
    [
        33,
        -6569.545,
        -17.25,
        297.563,
        10383.246,
        107811793.533,
        -179110.99,
        -10457.118,
        15113224.396
    ],
    [
        35,
        1498.376,
        -15.25,
        232.563,
        18451.167,
        340445555.188,
        -281380.293,
        -11210.239,
        161508908.371
    ],
    [
        36,
        1872.073,
        -14.25,
        203.063,
        18824.864,
        354375503.135,
        -268254.311,
        -11586.8,
        181141274.529
    ],
    [
        46,
        -13248.89,
        -4.25,
        18.063,
        3703.901,
        13718879.517,
        -15741.577,
        -15352.408,
        4424785.822
    ],
    [
        49,
        -30331.92,
        -1.25,
        1.563,
        -13379.13,
        179001110.853,
        16723.912,
        -16482.09,
        191817806.069
    ],
    [
        51,
        -4324.459,
        0.75,
        0.563,
        12628.331,
        159474754.614,
        9471.249,
        -17235.211,
        166687518.28
    ],
    [
        53,
        -9912.454,
        2.75,
        7.563,
        7040.337,
        49566340.537,
        19360.926,
        -17988.333,
        65219818.014
    ],
    [
        55,
        -23451.259,
        4.75,
        22.563,
        -6498.468,
        42230087.669,
        -30867.723,
        -18741.454,
        22182258.611
    ],
    [
        61,
        -32362.39,
        10.75,
        115.563,
        -15409.599,
        237455749.238,
        -165653.192,
        -21000.819,
        129085300.664
    ],
    [
        62,
        -36565.623,
        11.75,
        138.063,
        -19612.832,
        384663178.954,
        -230450.776,
        -21377.379,
        230682732.192
    ],
    [
        63,
        -14076.495,
        12.75,
        162.563,
        2876.295,
        8273074.919,
        36672.766,
        -21753.94,
        58943159.618
    ],
    [
        66,
        -22598.192,
        15.75,
        248.063,
        -5645.401,
        31870553.842,
        -88915.068,
        -22883.622,
        81470.638
    ],
    [
        67,
        -33468.887,
        16.75,
        280.563,
        -16516.096,
        272781429.83,
        -276644.609,
        -23260.183,
        104217629.189
    ],
    [
        72,
        -33756.459,
        21.75,
        473.063,
        -16803.668,
        282363273.784,
        -365479.789,
        -25142.987,
        74191904.544
    ],
    [
        73,
        -16064.687,
        22.75,
        517.563,
        888.103,
        788727.576,
        20204.351,
        -25519.548,
        89394383.152
    ],
    [
        79,
        -17943.685,
        28.75,
        826.563,
        -990.895,
        981872.6,
        -28488.227,
        -27778.912,
        96731681.02
    ]
];
let act2_sxx = 5983.76;
let act2_syy = 2862757111.294996;
let act2_sxy = -2253245.41525;
let act2_ssr = 2014273330.25;
let act2_smres = 111904073.903277;
let act2_r2 = 0.29638692632648067;
let t1_0 = -2.753589;
let t1_n_2 = 2.101;
let alpha1 = 0.05;
let act2_hypo_test_reject_op = 2;
//=====================Activity 3 varaibles======================================
let act3_N = 20;
let act3_X = [
    21,
    22,
    29,
    36,
    39,
    42,
    43,
    45,
    46,
    48,
    49,
    55,
    56,
    61,
    62,
    67,
    68,
    69,
    72,
    74
];
let act3_beta0 = -0.25583352890885624;
let act3_beta1 = -0.0003323844050573288;
let act3_Y2 = [
    -0.26281360141506016,
    -0.2631459858201175,
    -0.26547267665551877,
    -0.2664698298706908,
    -0.2668022142757481,
    -0.26746698308586275,
    -0.2677993674909201,
    -0.2711232115414934,
    -0.27212036475666534,
    -0.27278513356678,
    -0.27344990237689465,
    -0.27411467118700933,
    -0.2761089776173533,
    -0.27644136202241065,
    -0.27677374642746794,
    -0.27777089964263996,
    -0.2781032840476973,
    -0.27976520607298394,
    -0.2800975904780412,
    -0.2820918969083852
];
let act3_epsilon = [
    -0.795703627871178,
    0.7340956610155327,
    0.2663511986107576,
    -0.16500888285186233,
    -0.10133006512951326,
    -0.09916239198370325,
    -0.4174735763123398,
    -0.7579015168056387,
    0.2784720592381771,
    0.37516767249006344,
    -0.5284364253402704,
    -0.5258163953807007,
    0.46057277404687236,
    -0.6344984113558884,
    -0.3275124368650644,
    -0.6656886543186072,
    0.20953159286351797,
    -0.49279660741928916,
    0.2777657008275676,
    0.5949738043481767
];
let act3_Y = [
    -0.0383520556519957,
    -0.470228423348204,
    -0.3406081915154494,
    -0.21992216110027543,
    -0.23821782398951347,
    -0.23949407582920706,
    -0.15003345443984467,
    -0.05732533499604839,
    -0.3506750761831469,
    -0.37861689395820586,
    -0.12438226875717151,
    -0.12578612678853798,
    -0.40603282511259264,
    -0.09745450157767122,
    -0.18438514185111415,
    -0.08998552439551372,
    -0.33721044854080257,
    -0.14075127629605985,
    -0.35845304392057675,
    -0.4499291859877608
];
let act3_all_data = [
    [
        21,
        -0.038,
        441,
        -0.805
    ],
    [
        22,
        -0.47,
        484,
        -10.345
    ],
    [
        29,
        -0.341,
        841,
        -9.878
    ],
    [
        32,
        -0.22,
        1024,
        -7.038
    ],
    [
        33,
        -0.238,
        1089,
        -7.861
    ],
    [
        35,
        -0.239,
        1225,
        -8.382
    ],
    [
        36,
        -0.15,
        1296,
        -5.401
    ],
    [
        46,
        -0.057,
        2116,
        -2.637
    ],
    [
        49,
        -0.351,
        2401,
        -17.183
    ],
    [
        51,
        -0.379,
        2601,
        -19.309
    ],
    [
        53,
        -0.124,
        2809,
        -6.592
    ],
    [
        55,
        -0.126,
        3025,
        -6.918
    ],
    [
        61,
        -0.406,
        3721,
        -24.768
    ],
    [
        62,
        -0.097,
        3844,
        -6.042
    ],
    [
        63,
        -0.184,
        3969,
        -11.616
    ],
    [
        66,
        -0.09,
        4356,
        -5.939
    ],
    [
        67,
        -0.337,
        4489,
        -22.593
    ],
    [
        72,
        -0.141,
        5184,
        -10.134
    ],
    [
        73,
        -0.358,
        5329,
        -26.167
    ],
    [
        79,
        -0.45,
        6241,
        -35.544
    ]
];
//sum of X, Y, X2 and XY
let act3_sum_X = 1005;
let act3_sum_Y = -4.796;
let act3_sum_X2 = 56485;
let act3_sum_XY = -245.152;
//matrices
let act3_mat_A = [
    [
        56485,
        1005
    ],
    [
        1005,
        20
    ]
];
let act3_mat_x = [
    -0.0006940463756005837,
    -0.20492416962607066
];
let act3_mat_B = [
    -245.152,
    -4.796
];
//average variables
let act3_X_avg = 50.25;
let act3_Y_avg = -0.2598921;
//act3 sum of diff table data
let act3_table_data_2 = [
    [
        21,
        -0.038,
        -29.25,
        855.563,
        0.202,
        0.041,
        -5.895,
        -0.219,
        0.033
    ],
    [
        22,
        -0.47,
        -28.25,
        798.063,
        -0.23,
        0.053,
        6.507,
        -0.22,
        0.063
    ],
    [
        29,
        -0.341,
        -21.25,
        451.563,
        -0.101,
        0.01,
        2.14,
        -0.225,
        0.013
    ],
    [
        32,
        -0.22,
        -18.25,
        333.063,
        0.02,
        0,
        -0.364,
        -0.227,
        0
    ],
    [
        33,
        -0.238,
        -17.25,
        297.563,
        0.002,
        0,
        -0.029,
        -0.228,
        0
    ],
    [
        35,
        -0.239,
        -15.25,
        232.563,
        0,
        0,
        -0.006,
        -0.229,
        0
    ],
    [
        36,
        -0.15,
        -14.25,
        203.063,
        0.09,
        0.008,
        -1.28,
        -0.23,
        0.006
    ],
    [
        46,
        -0.057,
        -4.25,
        18.063,
        0.183,
        0.033,
        -0.776,
        -0.237,
        0.032
    ],
    [
        49,
        -0.351,
        -1.25,
        1.563,
        -0.111,
        0.012,
        0.138,
        -0.239,
        0.012
    ],
    [
        51,
        -0.379,
        0.75,
        0.563,
        -0.139,
        0.019,
        -0.104,
        -0.24,
        0.019
    ],
    [
        53,
        -0.124,
        2.75,
        7.563,
        0.116,
        0.013,
        0.318,
        -0.242,
        0.014
    ],
    [
        55,
        -0.126,
        4.75,
        22.563,
        0.114,
        0.013,
        0.542,
        -0.243,
        0.014
    ],
    [
        61,
        -0.406,
        10.75,
        115.563,
        -0.166,
        0.028,
        -1.786,
        -0.247,
        0.025
    ],
    [
        62,
        -0.097,
        11.75,
        138.063,
        0.142,
        0.02,
        1.674,
        -0.248,
        0.023
    ],
    [
        63,
        -0.184,
        12.75,
        162.563,
        0.056,
        0.003,
        0.708,
        -0.249,
        0.004
    ],
    [
        66,
        -0.09,
        15.75,
        248.063,
        0.15,
        0.022,
        2.361,
        -0.251,
        0.026
    ],
    [
        67,
        -0.337,
        16.75,
        280.563,
        -0.097,
        0.009,
        -1.63,
        -0.251,
        0.007
    ],
    [
        72,
        -0.141,
        21.75,
        473.063,
        0.099,
        0.01,
        2.156,
        -0.255,
        0.013
    ],
    [
        73,
        -0.358,
        22.75,
        517.563,
        -0.119,
        0.014,
        -2.697,
        -0.256,
        0.011
    ],
    [
        79,
        -0.45,
        28.75,
        826.563,
        -0.21,
        0.044,
        -6.039,
        -0.26,
        0.036
    ]
];
let act3_sxx = 5983.7600;
let act3_syy = 0.35200;
let act3_sxy = -4.08525;
let act3_ssr = 0.351;
let act3_smres = 0.0195;
let act3_r2 = 0.0028409090909089496;
let t2_0 = -0.3844662910683364;
let t2_n_2 = 2.101;
let alpha2 = 0.05;
let act3_hypo_test_reject_op = 1;
//=====================Activity 4 varaibles======================================
let act4_t01 = 0;
let act4_t02 = 0;
let act4_t03 = 0;
let alpha3 = 0;
let act4_tn2 = 0;
let chose_op1 = false;
let chose_op2 = false;
let chose_op3 = false;
let chose_op4 = false;
let calculated_u;
let calculated_l;
let act2_calculated_u;
let act2_calculated_l;
//=====================Activity 3 varaibles======================================
let act3_i = [0, 0];
let act3_i_max = [0, 0];
let length_i = 0;
let length_i_max = 0;
let length_ratio = 0;
//# sourceMappingURL=data.js.map