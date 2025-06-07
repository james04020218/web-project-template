const internetPlans_KT = {
    "KT인터넷(단독) 100mb": { basePrice: 22000, speed: 100, type: "100M" },
    "KT인터넷(단독) 500mb": { basePrice: 33000, speed: 500, type: "500M" },
    "KT인터넷(단독) 1GB": { basePrice: 38500, speed: 1000, type: "1G" },
    "KT인터넷번들100mb": { basePrice: 22000, speed: 100, type: "100M" },
    "KT인터넷번들500mb": { basePrice: 27500, speed: 500, type: "500M" },
    "KT인터넷번들1GB": { basePrice: 33000, speed: 1000, type: "1G" }
};

const tvPlans_KT = {
    "KTTV베이직": { basePrice: 15400, category: "베이직", stbIncluded: "기가지니A" },
    "KTTV라이트": { basePrice: 16500, category: "라이트", stbIncluded: "기가지니A" },
    "KTTV에센스": { basePrice: 19800, category: "에센스", stbIncluded: "기가지니A" },
    "KTTV에센스 플러스": { basePrice: 24200, category: "에센스 플러스", stbIncluded: "기가지니A" },
    "KTTV넷플릭스 HD": { basePrice: 31100, category: "넷플릭스 HD", stbIncluded: "기가지니A" },
    "KTTV넷플릭스 UHD": { basePrice: 34600, category: "넷플릭스 UHD", stbIncluded: "기가지니A" },
    "KTTV키즈랜드팩초이스": { basePrice: 20900, category: "키즈랜드", stbIncluded: "기가지니A" }
};

const additionalTvPlans_KT = {
    "none": { basePrice: 0, name: "선택 안함" },
    "KTTV 추가베이직": { basePrice: 10670, name: "베이직 (236채널) + 기가지니A" },
    "KTTV 추가라이트": { basePrice: 11220, name: "라이트 (240채널) + 기가지니A" },
    "KTTV 추가에센스": { basePrice: 13420, name: "에센스 (266채널) + 기가지니A" }
};

const phonePlans_KT = {
    "KT일반 전화일반 전화": { basePrice: 6050 },
    "KT일반 전화인터넷 전화 (모임스톤)": { basePrice: 5940 },
    "KT일반 전화인터넷 (단독) 500mb 이상 + 인터넷 전화": { basePrice: 3850 }
};

const wifiOptions_KT = {
    "KT공유기": { fee: 1100, name: "KT공유기" },
    "KT공유기 무료 (인단독 1GB)": { fee: 0, name: "KT공유기 무료 (인단독 1GB)" },
    "KT공유기 X": { fee: 0, name: "KT공유기 X" }
};

const ktAddonServices = {
    "기가지니3A": { price: 1100, name: "기가지니3A (AI 셋톱박스)"},
    "AI 지니 TV 올인원 사운드바": { price: 5500, name: "AI 지니 TV 올인원 사운드바"},
    "버디증폭기": { price: 1650, name: "버디증폭기"},
    "기가지니 4A": { price: 3300, name: "기가지니 4A"}
};

// Mobile plans from mobile_plan.json, sorted by price
const mobilePlans_KT = [
    { "category": "90K", "name": "디즈니+ 초이스 스페셜", "network": "5G", "price": 110000, "url": "https://product.kt.com/wDic/productDetail.do?ItemCode=1470" },
    { "category": "90K", "name": "(유튜브 프리미엄) 초이스 스페셜", "network": "5G", "price": 110000, "url": "https://product.kt.com/wDic/productDetail.do?ItemCode=1499" },
    { "category": "90K", "name": "넷플릭스 초이스 스페셜", "network": "5G", "price": 110000, "url": "https://product.kt.com/wDic/simple/mNetflixMain.do" },
    { "category": "90K", "name": "티빙/지니/밀리 초이스 스페셜", "network": "5G", "price": 110000, "url": "https://product.kt.com/wDic/productDetail.do?ItemCode=1601" },
    { "category": "90K", "name": "넷플릭스 초이스 베이직", "network": "5G", "price": 90000, "url": "https://product.kt.com/wDic/simple/mNetflixMain.do" },
    { "category": "90K", "name": "티빙/지니/밀리 초이스 베이직", "network": "5G", "price": 90000, "url": "https://product.kt.com/wDic/productDetail.do?ItemCode=1601" },
    { "category": "90K", "name": "디즈니+ 초이스 베이직", "network": "5G", "price": 90000, "url": "https://product.kt.com/wDic/productDetail.do?ItemCode=1470" },
    { "category": "90K", "name": "(유튜브 프리미엄) 초이스 베이직", "network": "5G", "price": 90000, "url": "https://product.kt.com/wDic/productDetail.do?ItemCode=1499" },
    { "category": "61K", "name": "데이터ON 프리미엄", "network": "LTE", "price": 89000, "url": "https://product.kt.com/wDic/productDetail.do?ItemCode=1248" },
    { "category": "61K", "name": "베이직", "network": "5G", "price": 80000, "url": "https://product.kt.com/wDic/productDetail.do?ItemCode=1283" },
    { "category": "61K", "name": "5G 심플 110GB", "network": "5G", "price": 69000, "url": "https://product.kt.com/wDic/productDetail.do?ItemCode=1406&CateCode=6002&filter_code=81&option_code=109&pageSize=10" },
    { "category": "61K", "name": "데이터ON 비디오 플러스", "network": "LTE", "price": 69000, "url": "https://product.kt.com/wDic/productDetail.do?ItemCode=1248" },
    { "category": "61K", "name": "5G 심플 90GB", "network": "5G", "price": 67000, "url": "https://product.kt.com/wDic/productDetail.do?ItemCode=1406&CateCode=6002&filter_code=81&option_code=109&pageSize=10" },
    { "category": "61K", "name": "5G 심플 70GB", "network": "5G", "price": 65000, "url": "https://product.kt.com/wDic/productDetail.do?ItemCode=1406&CateCode=6002&filter_code=81&option_code=109&pageSize=10" },
    { "category": "61K", "name": "5G 심플 50GB", "network": "5G", "price": 63000, "url": "https://product.kt.com/wDic/productDetail.do?ItemCode=1406&CateCode=6002&filter_code=81&option_code=109&pageSize=10" },
    { "category": "61K", "name": "5G 심플 30GB", "network": "5G", "price": 61000, "url": "https://product.kt.com/wDic/productDetail.do?ItemCode=1406&CateCode=6002&filter_code=81&option_code=109&pageSize=10" },
    { "category": "37K", "name": "5G 슬림 21GB", "network": "5G", "price": 58000, "url": "https://product.kt.com/wDic/productDetail.do?ItemCode=1284&CateCode=6002&filter_code=81&option_code=109&pageSize=10" },
    { "category": "37K", "name": "5G 슬림 21GB (이월)", "network": "5G", "price": 58000, "url": "https://product.kt.com/wDic/productDetail.do?ItemCode=1284&CateCode=6002&filter_code=81&option_code=109&pageSize=10" },
    { "category": "37K", "name": "5G 슬림 14GB", "network": "5G", "price": 55000, "url": "https://product.kt.com/wDic/productDetail.do?ItemCode=1284&CateCode=6002&filter_code=81&option_code=109&pageSize=10" },
    { "category": "37K", "name": "5G 슬림 14GB (이월)", "network": "5G", "price": 55000, "url": "https://product.kt.com/wDic/productDetail.do?ItemCode=1284&CateCode=6002&filter_code=81&option_code=109&pageSize=10" },
    { "category": "37K", "name": "5G 슬림 10GB", "network": "5G", "price": 50000, "url": "https://product.kt.com/wDic/productDetail.do?ItemCode=1284&CateCode=6002&filter_code=81&option_code=109&pageSize=10" },
    { "category": "37K", "name": "5G 슬림 10GB (이월)", "network": "5G", "price": 50000, "url": "https://product.kt.com/wDic/productDetail.do?ItemCode=1284&CateCode=6002&filter_code=81&option_code=109&pageSize=10" },
    { "category": "37K", "name": "5G 시니어 베이직", "network": "5G", "price": 49000, "url": "https://product.kt.com/wDic/productDetail.do?ItemCode=1558&CateCode=6002&filter_code=81&option_code=109&pageSize=10" },
    { "category": "37K", "name": "5G 슬림 7GB", "network": "5G", "price": 45000, "url": "https://product.kt.com/wDic/productDetail.do?ItemCode=1284&CateCode=6002&filter_code=81&option_code=109&pageSize=10" },
    { "category": "37K", "name": "5G 슬림 7GB (이월)", "network": "5G", "price": 45000, "url": "https://product.kt.com/wDic/productDetail.do?ItemCode=1284&CateCode=6002&filter_code=81&option_code=109&pageSize=10" },
    { "category": "37K", "name": "5G 시니어 A형", "network": "5G", "price": 44000, "url": "https://product.kt.com/wDic/productDetail.do?ItemCode=1558&CateCode=6002&filter_code=81&option_code=109&pageSize=10" },
    { "category": "37K", "name": "5G 시니어 B형", "network": "5G", "price": 42000, "url": "https://product.kt.com/wDic/productDetail.do?ItemCode=1558&CateCode=6002&filter_code=81&option_code=109&pageSize=10" },
    { "category": "37K", "name": "5G 시니어 C형", "network": "5G", "price": 41000, "url": "https://product.kt.com/wDic/productDetail.do?ItemCode=1558&CateCode=6002&filter_code=81&option_code=109&pageSize=10" },
    { "category": "37K", "name": "5G 슬림 5GB", "network": "5G", "price": 37000, "url": "https://product.kt.com/wDic/productDetail.do?ItemCode=1284&CateCode=6002&filter_code=81&option_code=109&pageSize=10" },
    { "category": "37K", "name": "5G 슬림 4GB (이월)", "network": "5G", "price": 37000, "url": "https://product.kt.com/wDic/productDetail.do?ItemCode=1284&CateCode=6002&filter_code=81&option_code=109&pageSize=10" },
    { "category": "37K", "name": "LTE 베이직", "network": "LTE", "price": 33000, "url": "" }
].sort((a, b) => b.price - a.price);


const newKtDiscountRules = {
    "총액결합할인": {
        "100M": {
            "단독": {"모바일_22000미만": 1650, "모바일_64900미만": 3300, "모바일_64900이상": 5500},
            "TV":   {"모바일_22000미만": 1650, "모바일_64900미만": 3300, "모바일_64900이상": 5500}
        },
        "500M": {
            "단독": {"모바일_22000미만": 7700, "모바일_22000이상": 11000},
            "TV":   {"모바일_22000미만": 2200, "모바일_22000이상": 5500}
        },
        "1G": {
            "단독": {"모바일_22000미만": 7700, "모바일_22000이상": 11000},
            "TV":   {"모바일_결합시": 5500}
        }
    },
    "프리미엄가족결합": {
        "500M_TV": 5500, "1G_TV": 5500,
        "500M_단독": 5500, "1G_단독": 11000
    },
    "프리미엄싱글결합": {
        "500M_단독": 5500, "1G_단독": 5500
    },
    "패밀리결합": {
        "100M_TV": 5500, "100M_단독": 5500,
        "500M_TV": 5500, "500M_단독": 11000,
        "1G_TV": 5500,   "1G_단독": 11000
    },
    "알뜰폰결합": {
        "100M_TV": 3300, "100M_단독": 3300,
        "500M_TV": 5500, "500M_단독": 11000,
        "1G_TV": 5500,   "1G_단독": 11000
    },
    "따로살아도 가족결합": {
        "500M_TV": { "모바일_22000미만": 9900, "모바일_22000이상": 13200, "tvDiscount": 2200 },
        "1G_TV": { "모바일_22000미만": 11000, "모바일_22000이상": 14300, "tvDiscount": 3300 }
    }
};

const dongpanAdditionalGiftTable_KT = {
    "37K": {
        "100M_단독": 150000, "500M_단독": 160000, "1G_단독": 170000,
        "100M_TV번들": 200000, "500M_TV번들": 220000, "1G_TV번들": 240000
    },
    "61K": {
        "100M_단독": 270000, "500M_단독": 280000, "1G_단독": 290000,
        "100M_TV번들": 320000, "500M_TV번들": 340000, "1G_TV번들": 360000
    },
    "90K": {
        "100M_단독": 310000, "500M_단독": 320000, "1G_단독": 330000,
        "100M_TV번들": 360000, "500M_TV번들": 380000, "1G_TV번들": 400000
    }
};

const ktInstallationFees_new = {
    internet_only: { weekday: 36000, weekend: 45000 },
    tv_only: { weekday: 34100, weekend: 42625 },
    phone_only: { weekday: 27500, weekend: 34375 },
    internet_tv: { weekday: 56200, weekend: 71250 },
    internet_phone_general: { weekday: 68000, weekend: 86000 },
    internet_phone_070: { weekday: 60000, weekend: 78000 },
    internet_tv_phone_general: { weekday: 88200, weekend: 112250 },
    internet_tv_phone_070: { weekday: 80200, weekend: 104250 },
    internet_tv_addTv: { weekday: 71600, weekend: 90500 }
};
const giftTable = {
    "베이직": {
        "100단독": { cash: 50000, voucher: 40000 }, "500단독": { cash: 100000, voucher: 40000 }, "1G단독": { cash: 90000, voucher: 50000 },
        "100번들": { cash: 310000, voucher: 60000 }, "500번들": { cash: 390000, voucher: 60000 }, "기가번들": { cash: 360000, voucher: 90000 }
    },
    "라이트": {
        "100단독": { cash: 50000, voucher: 40000 }, "500단독": { cash: 100000, voucher: 40000 }, "1G단독": { cash: 90000, voucher: 50000 },
        "100번들": { cash: 310000, voucher: 60000 }, "500번들": { cash: 380000, voucher: 70000 }, "기가번들": { cash: 350000, voucher: 100000 }
    },
    "에센스": {
        "100단독": { cash: 50000, voucher: 40000 }, "500단독": { cash: 100000, voucher: 40000 }, "1G단독": { cash: 90000, voucher: 50000 },
        "100번들": { cash: 310000, voucher: 60000 }, "500번들": { cash: 420000, voucher: 30000 }, "기가번들": { cash: 320000, voucher: 30000 }
    },
    "에센스 플러스": {
        "100단독": { cash: 50000, voucher: 40000 }, "500단독": { cash: 100000, voucher: 40000 }, "1G단독": { cash: 90000, voucher: 50000 },
        "100번들": { cash: 310000, voucher: 60000 }, "500번들": { cash: 420000, voucher: 30000 }, "기가번들": { cash: 320000, voucher: 30000 }
    },
    "넷플릭스 HD": {
        "100단독": { cash: 50000, voucher: 40000 }, "500단독": { cash: 100000, voucher: 40000 }, "1G단독": { cash: 90000, voucher: 50000 },
        "100번들": { cash: 310000, voucher: 60000 }, "500번들": { cash: 390000, voucher: 60000 }, "기가번들": { cash: 360000, voucher: 90000 }
    },
    "넷플릭스 UHD": {
        "100단독": { cash: 50000, voucher: 40000 }, "500단독": { cash: 100000, voucher: 40000 }, "1G단독": { cash: 90000, voucher: 50000 },
        "100번들": { cash: 310000, voucher: 60000 }, "500번들": { cash: 390000, voucher: 60000 }, "기가번들": { cash: 360000, voucher: 90000 }
    },
    "키즈랜드": {
        "100단독": { cash: 50000, voucher: 40000 }, "500단독": { cash: 100000, voucher: 40000 }, "1G단독": { cash: 90000, voucher: 50000 },
        "100번들": { cash: 310000, voucher: 60000 }, "500번들": { cash: 390000, voucher: 60000 }, "기가번들": { cash: 360000, voucher: 90000 }
    }
};

const kt_total_mobile_fee_discounts = {
    "100M": {
        "tier1_under_22000": { "internet_discount": 1650, "mobile_discount": 0, "total_discount": 1650 },
        "tier2_22000_to_64899": { "internet_discount": 3300, "mobile_discount": 0, "total_discount": 3300 },
        "tier3_64900_to_108899": { "internet_discount": 5500, "mobile_discount": 3300, "total_discount": 8800 },
        "tier4_108900_to_141899": { "internet_discount": 5500, "mobile_discount": 14300, "total_discount": 19800 },
        "tier5_141900_to_174899": { "internet_discount": 5500, "mobile_discount": 18700, "total_discount": 24200 },
        "tier6_over_174900": { "internet_discount": 5500, "mobile_discount": 23100, "total_discount": 28600 }
    },
    "500M_1G": {
        "tier1_under_22000": { "internet_discount": 2200, "mobile_discount": 0, "total_discount": 2200 },
        "tier2_22000_to_64899": { "internet_discount": 5500, "mobile_discount": 5500, "total_discount": 11000 },
        "tier3_64900_to_108899": { "internet_discount": 5500, "mobile_discount": 5500, "total_discount": 11000 },
        "tier4_108900_to_141899": { "internet_discount": 5500, "mobile_discount": 16610, "total_discount": 22110 },
        "tier5_141900_to_174899": { "internet_discount": 5500, "mobile_discount": 22100, "total_discount": 27610 },
        "tier6_over_174900": { "internet_discount": 5500, "mobile_discount": 27610, "total_discount": 33110 }
    }
};


const internetPlanEl = document.getElementById('internetPlan');
const wifiRouterRentalEl = document.getElementById('wifiRouterRental');
const tvPlanEl = document.getElementById('tvPlan');
const additionalTvPlanEl = document.getElementById('additionalTvPlan');
const phonePlanEl = document.getElementById('phonePlan');
const addonServicesContainerEl = document.getElementById('addonServicesContainer');
const mobileLinesCountEl = document.getElementById('mobileLinesCount');
const mobileLinesContainerEl = document.getElementById('mobileLinesContainer');
const dongpanSalesCheckKtEl = document.getElementById('dongpanSalesCheckKt');
const dongpanPolicyDetailsContainerKtEl = document.getElementById('dongpanPolicyDetailsContainerKt');
const discountTypeRadios = document.querySelectorAll('input[name="discountType"]');
const displayModeKtRadios = document.querySelectorAll('input[name="displayModeKt"]');

const totalAmountDetailsToggleEl = document.getElementById('totalAmountDetailsToggle');
const totalAmountDetailsContainerEl = document.getElementById('totalAmountDetailsContainer');
const detailInternetDiscountEl = document.getElementById('detailInternetDiscount');
const detailMobileDiscountEl = document.getElementById('detailMobileDiscount');
const detailTotalDiscountEl = document.getElementById('detailTotalDiscount');

const premiumFamilyDetailsToggleEl = document.getElementById('premiumFamilyDetailsToggle');
const premiumFamilyDetailsContainerEl = document.getElementById('premiumFamilyDetailsContainer');
const detailPfInternetDiscountEl = document.getElementById('detailPfInternetDiscount');
const detailPfMobileDiscountsContainerEl = document.getElementById('detailPfMobileDiscountsContainer');


const premiumSingleDetailsToggleEl = document.getElementById('premiumSingleDetailsToggle');
const premiumSingleDetailsContainerEl = document.getElementById('premiumSingleDetailsContainer');
const detailPsInternetDiscountEl = document.getElementById('detailPsInternetDiscount');
// The following two elements for premium single details are now replaced by a single container
// const detailPsMobileDiscountTextEl = document.getElementById('detailPsMobileDiscountText');
// const detailPsMobileFinalAmountEl = document.getElementById('detailPsMobileFinalAmount');


const familyBundleDetailsToggleEl = document.getElementById('familyBundleDetailsToggle');
const familyBundleDetailsContainerEl = document.getElementById('familyBundleDetailsContainer');
const detailFbInternetDiscountEl = document.getElementById('detailFbInternetDiscount');

const separateFamilyDetailsToggleEl = document.getElementById('separateFamilyDetailsToggle');
const separateFamilyDetailsContainerEl = document.getElementById('separateFamilyDetailsContainer');
const detailSfInternetDiscountEl = document.getElementById('detailSfInternetDiscount');
const detailSfTvDiscountEl = document.getElementById('detailSfTvDiscount');

const mvnoDetailsToggleEl = document.getElementById('mvnoDetailsToggle');
const mvnoDetailsContainerEl = document.getElementById('mvnoDetailsContainer');
const detailMvnoInternetDiscountEl = document.getElementById('detailMvnoInternetDiscount');

const calculateButton = document.getElementById('calculateButton');
const resetButton = document.getElementById('resetButton'); // Reset button added
const resultSection = document.getElementById('resultSection');

const selectedInternetEl = document.getElementById('selectedInternet');
const selectedTvEl = document.getElementById('selectedTv');
const selectedStbEl = document.getElementById('selectedStb');
const selectedAdditionalTvEl = document.getElementById('selectedAdditionalTv');
const selectedPhoneEl = document.getElementById('selectedPhone');
const selectedMobileCountEl = document.getElementById('selectedMobileCount');
const selectedDiscountTypeEl = document.getElementById('selectedDiscountType');

const totalBaseInternetCostEl = document.getElementById('totalBaseInternetCost');
const totalInternetDiscountAmountEl = document.getElementById('totalInternetDiscountAmount');
const internetModemRentalEl = document.getElementById('internetModemRental');
const wifiRouterRentalCostDisplayEl = document.getElementById('wifiRouterRentalCostDisplay');

const tvCostSummaryContainerEl = document.getElementById('tvCostSummaryContainer');
const tvBaseCostDisplayEl = document.getElementById('tvBaseCostDisplay');
const tvDiscountDisplayEl = document.getElementById('tvDiscountDisplay');
const stbRentalCostDisplayEl = document.getElementById('stbRentalCostDisplay');

const additionalTvCostSummaryContainerEl = document.getElementById('additionalTvCostSummaryContainer');
const additionalTvCostDisplayEl = document.getElementById('additionalTvCostDisplay');

const phoneCostSummaryContainerEl = document.getElementById('phoneCostSummaryContainer');
const phoneBaseCostDisplayEl = document.getElementById('phoneBaseCostDisplay');
const phoneDiscountDisplayEl = document.getElementById('phoneDiscountDisplay');

const addonServicesSummaryContainerEl = document.getElementById('addonServicesSummaryContainer');
const addonServicesTotalCostDisplayEl = document.getElementById('addonServicesTotalCostDisplay');


const finalMonthlyCostEl = document.getElementById('finalMonthlyCost');
const finalCostLabelEl = document.getElementById('finalCostLabel');
const installationCostResultEl = document.getElementById('installationCostResult');

const giftCashEl = document.getElementById('giftCash');
const giftVoucherEl = document.getElementById('giftVoucher');
const giftPhoneVoucherEl = document.getElementById('giftPhoneVoucher');
const giftAdditionalTvEl = document.getElementById('giftAdditionalTv');
const dongpanCashContainerKtEl = document.getElementById('dongpanCashContainerKt');
const giftDongpanAdditionalCashKtEl = document.getElementById('giftDongpanAdditionalCashKt');
const giftTotalEl = document.getElementById('giftTotal');

const messageScriptSectionEl = document.getElementById('messageScriptSection');
const memoScriptEl = document.getElementById('memoScript');
const infoScriptEl = document.getElementById('infoScript');
const completeScriptEl = document.getElementById('completeScript');
const dongpanMemoScriptEl = document.getElementById('dongpanMemoScript');
const sensitiveInfoLinkScriptEl = document.getElementById('sensitiveInfoLinkScript');


mobileLinesCountEl.addEventListener('input', updateMobileLinesInputs);
calculateButton.addEventListener('click', calculateAndDisplayResults);
resetButton.addEventListener('click', resetCalculator); // Event listener for reset button

if(dongpanSalesCheckKtEl) {
    dongpanSalesCheckKtEl.addEventListener('change', function() {
        if (dongpanPolicyDetailsContainerKtEl) {
            dongpanPolicyDetailsContainerKtEl.classList.toggle('hidden', !this.checked);
        }
        if (!resultSection.classList.contains('hidden')) {
            calculateAndDisplayResults();
        }
    });
}

const allDetailSections = [
    { radioValue: 'totalAmountBundle', toggleEl: totalAmountDetailsToggleEl, containerEl: totalAmountDetailsContainerEl, updateFn: updateTotalAmountDetails },
    { radioValue: 'premiumFamilyBundle', toggleEl: premiumFamilyDetailsToggleEl, containerEl: premiumFamilyDetailsContainerEl, updateFn: updatePremiumFamilyDetails },
    { radioValue: 'premiumSingleBundle', toggleEl: premiumSingleDetailsToggleEl, containerEl: premiumSingleDetailsContainerEl, updateFn: updatePremiumSingleDetails },
    { radioValue: 'familyBundle', toggleEl: familyBundleDetailsToggleEl, containerEl: familyBundleDetailsContainerEl, updateFn: updateFamilyBundleDetails },
    { radioValue: 'separateFamilyBundle', toggleEl: separateFamilyDetailsToggleEl, containerEl: separateFamilyDetailsContainerEl, updateFn: updateSeparateFamilyDetails },
    { radioValue: 'mvnoBundle', toggleEl: mvnoDetailsToggleEl, containerEl: mvnoDetailsContainerEl, updateFn: updateMvnoDetails }
];

function updateMobilePlanOptions() {
    const selectedDiscountType = document.querySelector('input[name="discountType"]:checked').value;
    const isPremiumBundle = selectedDiscountType === 'premiumFamilyBundle' || selectedDiscountType === 'premiumSingleBundle';

    document.querySelectorAll('.mobile-plan-select').forEach(select => {
        let needsReset = false;
        for (const option of select.options) {
            const price = parseInt(option.value);
            if (price > 0) { 
                if (isPremiumBundle && price < 80000) {
                    option.disabled = true;
                    if (option.selected) {
                        needsReset = true;
                    }
                } else {
                    option.disabled = false;
                }
            }
        }
        if (needsReset) {
            select.value = "0"; 
            select.dispatchEvent(new Event('change'));
        }
    });
}


discountTypeRadios.forEach(radio => {
    radio.addEventListener('change', function() {
        const newlySelectedRadioValue = this.value;
        allDetailSections.forEach(section => {
            if (section.containerEl && section.toggleEl) {
                let isVisible = false;
                if (newlySelectedRadioValue === section.radioValue) {
                    isVisible = section.toggleEl.checked;
                    if (isVisible && section.updateFn) {
                        section.updateFn();
                    }
                } else {
                    section.toggleEl.checked = false;
                    isVisible = false;
                }
                section.containerEl.classList.toggle('hidden', !isVisible);
            }
        });

        if (newlySelectedRadioValue === 'premiumFamilyBundle' || newlySelectedRadioValue === 'premiumSingleBundle') {
            const firstLineSelect = document.getElementById('mobilePlan0');
            if (firstLineSelect && parseInt(firstLineSelect.value) < 80000) {
                alert('프리미엄 결합은 8만원 이상 요금제부터 선택 가능합니다.');
            }
        }
        updateMobilePlanOptions();

        if (newlySelectedRadioValue === "none" || newlySelectedRadioValue === "familyBundle") {
            mobileLinesCountEl.value = 0;
            mobileLinesCountEl.disabled = true;
        } else {
            if (parseInt(mobileLinesCountEl.value) === 0) {
               mobileLinesCountEl.value = 1;
            }
            mobileLinesCountEl.disabled = false;
        }
        updateMobileLinesInputs();
    });
});

allDetailSections.forEach(section => {
    if (section.toggleEl && section.containerEl && section.updateFn) {
        section.toggleEl.addEventListener('change', function() {
            const radioForThisToggle = document.querySelector(`input[name="discountType"][value="${section.radioValue}"]`);
            if (radioForThisToggle && radioForThisToggle.checked) {
                section.containerEl.classList.toggle('hidden', !this.checked);
                if (this.checked) {
                    section.updateFn();
                }
            } else {
                section.containerEl.classList.add('hidden');
                this.checked = false;
            }
        });
    }
});

const internetTypeRadios = document.querySelectorAll('input[name="internetType"]');
internetTypeRadios.forEach(radio => {
    radio.addEventListener('change', function() {
        populateInternetPlans();
        handleInternetTypeChange();
    });
});

function populateInternetPlans() {
    const selectedInternetType = document.querySelector('input[name="internetType"]:checked').value;
    internetPlanEl.innerHTML = '<option value="none">선택 안함</option>';

    for (const planKey in internetPlans_KT) {
        const plan = internetPlans_KT[planKey];
        let displayText = "";
        let matchesType = false;

        if (selectedInternetType === "bundle") {
            if (planKey.includes("번들")) {
                displayText = `인터넷 ${plan.speed}M (TV 결합 시) (월 ${plan.basePrice.toLocaleString()}원)`;
                matchesType = true;
            }
        } else { // standalone
            if (planKey.includes("(단독)")) {
                displayText = `인터넷(단독) ${plan.speed}M (월 ${plan.basePrice.toLocaleString()}원)`;
                matchesType = true;
            }
        }

        if (matchesType) {
            const option = document.createElement('option');
            option.value = planKey;
            option.textContent = displayText;
            option.dataset.price = plan.basePrice;
            option.dataset.speed = plan.speed;
            option.dataset.type = plan.type;
            internetPlanEl.appendChild(option);
        }
    }
    const internetChangeEvent = new Event('change');
    internetPlanEl.dispatchEvent(internetChangeEvent);
}

function handleInternetTypeChange() {
    const selectedInternetType = document.querySelector('input[name="internetType"]:checked').value;
    const isStandalone = selectedInternetType === 'standalone';

    tvPlanEl.disabled = isStandalone;
    additionalTvPlanEl.disabled = isStandalone;
    phonePlanEl.disabled = isStandalone;

    if (isStandalone) {
        tvPlanEl.value = "none";
        additionalTvPlanEl.value = "none";
        phonePlanEl.value = "none";
    } else {
        if (tvPlanEl.value === "none") {
            tvPlanEl.value = "KTTV베이직";
        }
    }
    const tvChangeEvent = new Event('change');
    tvPlanEl.dispatchEvent(tvChangeEvent);

    const internetChangeEvent = new Event('change');
    internetPlanEl.dispatchEvent(internetChangeEvent);
}


internetPlanEl.addEventListener('change', function() {
    const selectedOption = this.options[this.selectedIndex];
    if (!selectedOption || selectedOption.value === 'none') {
        wifiRouterRentalEl.disabled = false;
        Array.from(wifiRouterRentalEl.options).forEach(opt => opt.hidden = false);
        return;
    }

    const isDanDok = selectedOption.text.includes("(단독)");
    const internetSpeed = parseInt(selectedOption.dataset.speed);

    const freeWifiOption = Array.from(wifiRouterRentalEl.options).find(opt => opt.dataset.name === "KT공유기 무료 (인단독 1GB)");
    const noWifiOption = Array.from(wifiRouterRentalEl.options).find(opt => opt.dataset.name === "KT공유기 X");

    if (isDanDok && internetSpeed === 1000 && freeWifiOption) {
        wifiRouterRentalEl.value = freeWifiOption.value;
        wifiRouterRentalEl.disabled = true;
        Array.from(wifiRouterRentalEl.options).forEach(opt => {
            opt.hidden = (opt.dataset.name !== "KT공유기 무료 (인단독 1GB)");
        });
    } else {
        wifiRouterRentalEl.disabled = false;
        Array.from(wifiRouterRentalEl.options).forEach(opt => {
            if (opt.dataset.name === "KT공유기 무료 (인단독 1GB)") {
                opt.hidden = true;
            } else {
                opt.hidden = false;
            }
        });
        if (wifiRouterRentalEl.options[wifiRouterRentalEl.selectedIndex]?.dataset.name === "KT공유기 무료 (인단독 1GB)") {
            if(noWifiOption) wifiRouterRentalEl.value = noWifiOption.value;
        }
    }
});


tvPlanEl.addEventListener('change', () => {
    const isTvSelected = tvPlanEl.value !== 'none';
    // No tvStbHiddenInfo to manage
});

additionalTvPlanEl.addEventListener('change', () => {
    if (tvPlanEl.value === 'none' && additionalTvPlanEl.value !== 'none') {
        alert('첫 번째 TV를 먼저 선택해주세요.');
        additionalTvPlanEl.value = 'none';
    }
});


function updateMobileLinesInputs() {
    const count = parseInt(mobileLinesCountEl.value) || 0;
    mobileLinesContainerEl.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const div = document.createElement('div');
        div.className = 'mobile-line-item py-2';
        div.innerHTML = `
            <div>
                <label for="mobilePlan${i}" class="block text-sm font-medium text-slate-600">회선 ${i + 1} 요금제 선택</label>
                <select id="mobilePlan${i}" class="input-field mt-1 mobile-plan-select w-full">
                    <option value="0" data-name="미선택" data-url="">요금제 선택</option>
                    ${mobilePlans_KT.map(plan => `
                        <option value="${plan.price}" data-name="${plan.name}" data-url="${plan.url}">
                            ${plan.name} (${plan.price.toLocaleString()}원)
                        </option>
                    `).join('')}
                </select>
            </div>
        `;
        mobileLinesContainerEl.appendChild(div);
    }
    
    document.querySelectorAll('.mobile-plan-select').forEach(sel => {
        sel.addEventListener('change', () => {
             const selectedDiscountType = document.querySelector('input[name="discountType"]:checked').value;
             const section = allDetailSections.find(s => s.radioValue === selectedDiscountType);
             if(section && section.toggleEl.checked && section.updateFn){
                 section.updateFn();
             }
        });
    });

    updateMobilePlanOptions();
}


function getSelectedInternetInfo(planName) {
    if (!planName || planName === 'none' || !internetPlans_KT[planName]) {
        return { basePrice: 0, modemFee: 0, type: "none", speed: 0 };
    }

    let basePrice = internetPlans_KT[planName].basePrice;
    const selectedOption = internetPlanEl.options[internetPlanEl.selectedIndex];
    if (selectedOption && selectedOption.value !== 'none' && selectedOption.text.includes("KT인터넷번들")) {
        basePrice = internetPlans_KT[planName].basePrice;
    }

    return { ...internetPlans_KT[planName], basePrice: basePrice };
}

function getMobileTierKey(totalMobileBaseCost, numMobileLines, internetSpeedType) {
    if (numMobileLines === 0 || totalMobileBaseCost === 0) return null;
    if (internetSpeedType === "100M") {
        if (totalMobileBaseCost < 22000) return "모바일_22000미만";
        if (totalMobileBaseCost < 64900) return "모바일_64900미만";
        return "모바일_64900이상";
    } else {
        if (totalMobileBaseCost < 22000) return "모바일_22000미만";
        return "모바일_22000이상";
    }
}

function getMobileTierKeyFor500MUp(totalMobileBaseCost, numMobileLines){
    if (numMobileLines === 0 || totalMobileBaseCost === 0) return null;
    if (totalMobileBaseCost < 22000) return "모바일_22000미만";
    return "모바일_22000이상";
}

function getMobileTierKeyForSeparateFamily(totalMobileBaseCost, numMobileLines){
    if (numMobileLines === 0 || totalMobileBaseCost === 0) return null;
    if (totalMobileBaseCost < 22000) return "모바일_22000미만";
    return "모바일_22000이상";
}

function updateTotalAmountDetails() {
    const internetPlanName = internetPlanEl.value;
    
    const mobilePlanSelects = document.querySelectorAll('.mobile-plan-select');
    const numMobileLines = mobilePlanSelects.length;
    let totalMobileBaseCost = 0;

    let mobileSummaryHtml = '<div id="totalAmountMobileSummaryContainer" class="mb-4 p-2 bg-slate-50 rounded-md">';
    mobileSummaryHtml += '<p class="font-semibold">선택된 모바일 요금제:</p><ul class="list-disc list-inside text-sm">';
    mobilePlanSelects.forEach((select, index) => {
        const option = select.options[select.selectedIndex];
        const price = parseInt(option.value);
        const name = option.dataset.name;
        if (price > 0) {
            totalMobileBaseCost += price;
            mobileSummaryHtml += `<li>회선 ${index + 1}: ${name} (${price.toLocaleString()}원)</li>`;
        }
    });
    mobileSummaryHtml += `</ul><p class="font-semibold mt-2">모바일 총액: ${totalMobileBaseCost.toLocaleString()}원</p></div>`;


    let detailInternetD = 0;
    let detailMobileD = 0;
    let detailTotalD = 0;

    if (internetPlanName !== 'none' && numMobileLines > 0 && totalMobileBaseCost > 0) {
        const currentInternet = getSelectedInternetInfo(internetPlanName);
        const internetSpeedType = currentInternet.speed === 100 ? "100M" : (currentInternet.speed === 500 ? "500M" : "1G");
        const isBundled = tvPlanEl.value !== 'none' || phonePlanEl.value !== 'none';
        const bundleTypeKey = isBundled ? "TV" : "단독";

        let mobileTierKey;
        if (internetSpeedType === "100M") {
            mobileTierKey = getMobileTierKey(totalMobileBaseCost, numMobileLines, internetSpeedType);
        } else {
            mobileTierKey = getMobileTierKeyFor500MUp(totalMobileBaseCost, numMobileLines);
        }

        if (mobileTierKey && newKtDiscountRules.총액결합할인?.[internetSpeedType]?.[bundleTypeKey]?.[mobileTierKey]) {
            detailInternetD = newKtDiscountRules.총액결합할인[internetSpeedType][bundleTypeKey][mobileTierKey];
        } else if (internetSpeedType === "1G" && bundleTypeKey === "TV" && newKtDiscountRules.총액결합할인?.["1G"]?.TV?.["모바일_결합시"]) {
            detailInternetD = newKtDiscountRules.총액결합할인["1G"]["TV"]["모바일_결합시"];
        }

        let mobileTierKeyForJson = null;
        if (totalMobileBaseCost < 22000) { mobileTierKeyForJson = "tier1_under_22000"; }
        else if (totalMobileBaseCost < 64900) { mobileTierKeyForJson = "tier2_22000_to_64899"; }
        else if (totalMobileBaseCost < 108900) { mobileTierKeyForJson = "tier3_64900_to_108899"; }
        else if (totalMobileBaseCost < 141900) { mobileTierKeyForJson = "tier4_108900_to_141899"; }
        else if (totalMobileBaseCost < 174900) { mobileTierKeyForJson = "tier5_141900_to_174899"; }
        else { mobileTierKeyForJson = "tier6_over_174900"; }

        const internetSpeedKeyForJson = (currentInternet.speed >= 500) ? "500M_1G" : "100M";

        if (mobileTierKeyForJson && kt_total_mobile_fee_discounts?.[internetSpeedKeyForJson]?.[mobileTierKeyForJson]) {
            detailMobileD = kt_total_mobile_fee_discounts[internetSpeedKeyForJson][mobileTierKeyForJson].mobile_discount || 0;
        }

        detailTotalD = detailInternetD + detailMobileD;
    }
    
    const container = document.getElementById('totalAmountDetailsContainer');
    if(container) {
         container.innerHTML = mobileSummaryHtml + `
            <p>인터넷 할인: <span id="detailInternetDiscount" class="font-bold">${detailInternetD.toLocaleString()}</span>원</p>
            <p>모바일 할인 (참고용): <span id="detailMobileDiscount" class="font-bold">${detailMobileD.toLocaleString()}</span>원</p>
            <p class="text-lg font-bold">총 할인 (참고용): <span id="detailTotalDiscount" class="font-bold">${detailTotalD.toLocaleString()}</span>원</p>
         `;
    }
}

function updatePremiumFamilyDetails() {
    let internetDiscount = 0;
    let mobileDetailsHtml = '';
    
    const mobilePlanSelects = document.querySelectorAll('.mobile-plan-select');
    const numMobileLines = mobilePlanSelects.length;

    if (numMobileLines === 0) {
        mobileDetailsHtml = '<p>모바일 회선을 추가해주세요.</p>';
    } else {
        const firstLineOption = mobilePlanSelects[0].options[mobilePlanSelects[0].selectedIndex];
        const firstLinePrice = parseInt(firstLineOption.value);
        const currentInternet = getSelectedInternetInfo(internetPlanEl.value);

        if (firstLinePrice >= 80000 && currentInternet.speed >= 500) {
            const isBundled = tvPlanEl.value !== 'none' || phonePlanEl.value !== 'none';
            const speedKeyPart = currentInternet.speed >= 1000 ? "1G" : "500M";
            const bundleKey = isBundled ? "_TV" : "_단독";
            internetDiscount = newKtDiscountRules.프리미엄가족결합?.[speedKeyPart + bundleKey] || 0;

            mobilePlanSelects.forEach((select, index) => {
                const option = select.options[select.selectedIndex];
                const price = parseInt(option.value);
                const name = option.dataset.name;
                const url = option.dataset.url;

                if (price === 0) {
                    mobileDetailsHtml += `<div class="mt-2 p-2 border-t"><p class="font-semibold">회선 ${index + 1}: 요금제를 선택해주세요.</p></div>`;
                    return;
                }

                let lineDiscount = 0;
                let discountBreakdown = '';
                
                if (index === 0) { // Line 1
                    const baseDiscount = 5500;
                    const selectiveDiscount = price * 0.25;
                    lineDiscount = baseDiscount + selectiveDiscount;
                    discountBreakdown = `
                        <ul class="list-disc list-inside text-sm">
                            <li>기본할인: ${baseDiscount.toLocaleString()}원</li>
                            <li>선택약정할인 (25%): ${selectiveDiscount.toLocaleString()}원</li>
                        </ul>`;
                } else if (price >= 77000) { // Line 2+ (High Tier)
                    const premiumDiscount = price * 0.25;
                    const selectiveDiscount = price * 0.25;
                    lineDiscount = premiumDiscount + selectiveDiscount;
                    discountBreakdown = `
                        <ul class="list-disc list-inside text-sm">
                            <li>프리미엄 가족결합 할인: ${premiumDiscount.toLocaleString()}원</li>
                            <li>선택약정할인 (25%): ${selectiveDiscount.toLocaleString()}원</li>
                        </ul>`;
                } else { // Line 2+ (Low Tier)
                    lineDiscount = 0;
                    discountBreakdown = `<p class="text-sm text-slate-500">추가 할인 없음 (7.7만원 미만 요금제)</p>`;
                }

                const finalBill = price - lineDiscount;

                mobileDetailsHtml += `
                    <div class="mt-2 py-2 border-t">
                        <p class="font-semibold text-slate-800">회선 ${index + 1}: ${name} ${url ? `<a href="${url}" target="_blank" class="text-blue-500 hover:underline text-xs">(상세보기)</a>` : ''}</p>
                        <div class="pl-4">
                            <p class="font-medium">할인금액 (<span class="text-red-500">${lineDiscount.toLocaleString()}</span>원):</p>
                            ${discountBreakdown}
                            <p class="font-medium mt-1">예상 청구금액: <span class="text-blue-600 font-bold">${finalBill.toLocaleString()}</span>원</p>
                        </div>
                    </div>
                `;
            });

        } else {
            mobileDetailsHtml = '<p class="text-red-600 p-2">조건 미충족: 프리미엄 가족결합은 대표 회선(1번째)이 8만원 이상 요금제이고, 인터넷이 500M 이상일 때 적용 가능합니다.</p>';
        }
    }

    if(detailPfInternetDiscountEl) detailPfInternetDiscountEl.textContent = internetDiscount.toLocaleString();
    if(detailPfMobileDiscountsContainerEl) detailPfMobileDiscountsContainerEl.innerHTML = mobileDetailsHtml;
}


function updatePremiumSingleDetails() {
    let internetDiscount = 0;
    let detailsHtml = '<p class="text-red-600 p-2">조건 미충족: 프리미엄 싱글결합은 8만원 이상 요금제 1회선 사용 시 적용 가능합니다.</p>';
    
    const numMobileLines = document.querySelectorAll('.mobile-plan-select').length;
    const mobilePlanSelect = document.getElementById('mobilePlan0');

    if (mobilePlanSelect && numMobileLines === 1) {
        const selectedOption = mobilePlanSelect.options[mobilePlanSelect.selectedIndex];
        const price = parseInt(selectedOption.value);
        const name = selectedOption.dataset.name;
        const url = selectedOption.dataset.url;

        const currentInternet = getSelectedInternetInfo(internetPlanEl.value);
        const isInternetOnlyBundle = tvPlanEl.value === 'none' && phonePlanEl.value === 'none' && additionalTvPlanEl.value === 'none';

        if (price >= 80000 && currentInternet.speed >= 500) {
            if (isInternetOnlyBundle) {
                const speedKey = currentInternet.speed === 500 ? "500M_단독" : "1G_단독";
                internetDiscount = newKtDiscountRules.프리미엄싱글결합?.[speedKey] || 0;
            } else {
                 internetDiscount = 0; // Not applicable for TV/Phone bundles
            }

            const premiumDiscount = price * 0.25;
            const selectiveDiscount = price * 0.25;
            const totalMobileDiscount = premiumDiscount + selectiveDiscount;
            const finalMobileBill = price - totalMobileDiscount;

            detailsHtml = `
                <div class="space-y-2">
                    <p class="font-semibold text-slate-800">선택요금: ${name} ${url ? `<a href="${url}" target="_blank" class="text-blue-500 hover:underline text-xs">(상세보기)</a>` : ''}</p>
                    <div class="pl-4">
                        <p class="font-medium">할인금액 (<span class="text-red-500">${totalMobileDiscount.toLocaleString()}</span>원):</p>
                        <ul class="list-disc list-inside text-sm">
                            <li>프리미엄 싱글결합 할인: ${premiumDiscount.toLocaleString()}원</li>
                            <li>선택약정할인 (25%): ${selectiveDiscount.toLocaleString()}원</li>
                        </ul>
                        <p class="font-medium mt-1">예상 청구금액: <span class="text-blue-600 font-bold">${finalMobileBill.toLocaleString()}</span>원</p>
                    </div>
                </div>
            `;
        }
    } else if (numMobileLines > 1) {
         detailsHtml = '<p class="text-red-600 p-2">프리미엄 싱글결합은 모바일 1회선일 때만 가능합니다.</p>';
    }

    if(detailPsInternetDiscountEl) detailPsInternetDiscountEl.textContent = internetDiscount.toLocaleString();
    if(premiumSingleDetailsContainerEl) premiumSingleDetailsContainerEl.innerHTML = detailsHtml;
}


function updateFamilyBundleDetails() {
    const internetPlanName = internetPlanEl.value;
    let internetDiscount = 0;
    if (internetPlanName !== 'none') {
        const currentInternet = getSelectedInternetInfo(internetPlanName);
        const isBundled = tvPlanEl.value !== 'none' || phonePlanEl.value !== 'none';
        let speedKey = "";
        if (currentInternet.speed === 100) speedKey = "100M";
        else if (currentInternet.speed === 500) speedKey = "500M";
        else if (currentInternet.speed >= 1000) speedKey = "1G";

        const bundleKey = isBundled ? "_TV" : "_단독";
        if (newKtDiscountRules.패밀리결합?.[speedKey + bundleKey]) {
            internetDiscount = newKtDiscountRules.패밀리결합[speedKey + bundleKey];
        }
    }
    if(detailFbInternetDiscountEl) detailFbInternetDiscountEl.textContent = internetDiscount.toLocaleString();
}

function updateSeparateFamilyDetails() {
    const internetPlanName = internetPlanEl.value;
    let internetDiscount = 0;
    let tvDiscountRef = 0;
    const currentInternet = getSelectedInternetInfo(internetPlanName);
    
    let totalMobileBaseCost = 0;
    const mobilePlanSelects = document.querySelectorAll('.mobile-plan-select');
    mobilePlanSelects.forEach(select => {
        totalMobileBaseCost += parseInt(select.value) || 0;
    });
    const numMobileLines = mobilePlanSelects.length;


    let mobileTierKey = getMobileTierKeyForSeparateFamily(totalMobileBaseCost, numMobileLines);

    let speedKeyFor따살 = "";
    if (currentInternet.speed === 500) speedKeyFor따살 = "500M_TV";
    else if (currentInternet.speed >= 1000) speedKeyFor따살 = "1G_TV";

    if (speedKeyFor따살 && mobileTierKey && newKtDiscountRules["따로살아도 가족결합"]?.[speedKeyFor따살]?.[mobileTierKey]) {
        internetDiscount = newKtDiscountRules["따로살아도 가족결합"][speedKeyFor따살][mobileTierKey];
        tvDiscountRef = newKtDiscountRules["따로살아도 가족결합"][speedKeyFor따살].tvDiscount || 0;
    }

    if(detailSfInternetDiscountEl) detailSfInternetDiscountEl.textContent = internetDiscount.toLocaleString();
    if(detailSfTvDiscountEl) detailSfTvDiscountEl.textContent = tvDiscountRef.toLocaleString();
}

function updateMvnoDetails() {
    const internetPlanName = internetPlanEl.value;
    let internetDiscount = 0;
    if (internetPlanName !== 'none') {
        const currentInternet = getSelectedInternetInfo(internetPlanName);
        const isBundled = tvPlanEl.value !== 'none' || phonePlanEl.value !== 'none';
        let speedKey = "";
        if (currentInternet.speed === 100) speedKey = "100M";
        else if (currentInternet.speed === 500) speedKey = "500M";
        else if (currentInternet.speed >= 1000) speedKey = "1G";

        if (speedKey) {
            const bundleKey = isBundled ? "_TV" : "_단독";
            const fullKey = speedKey + bundleKey;
            internetDiscount = newKtDiscountRules.알뜰폰결합?.[fullKey] || 0;
        }
    }
    if(detailMvnoInternetDiscountEl) detailMvnoInternetDiscountEl.textContent = internetDiscount.toLocaleString();
}


function calculateAndDisplayResults() {
    try {
        const internetType = document.querySelector('input[name="internetType"]:checked').value;
        const internetPlanName = internetPlanEl.value;
        const selectedWifiOption = wifiRouterRentalEl.options[wifiRouterRentalEl.selectedIndex];
        const selectedWifiOptionName = selectedWifiOption ? selectedWifiOption.dataset.name : "KT공유기 X";

        const tvPlanName = tvPlanEl.value;
        const additionalTvPlanKey = additionalTvPlanEl.value;
        const phonePlanName = phonePlanEl.value;
        
        const discountType = document.querySelector('input[name="discountType"]:checked').value;
        const displayMode = document.querySelector('input[name="displayModeKt"]:checked').value;
        const installationTime = document.querySelector('input[name="installationTime"]:checked').value;
        const selectedAddonCheckboxes = document.querySelectorAll('#addonServicesContainer input[type="checkbox"]:checked');

        const mobilePlanSelects = document.querySelectorAll('.mobile-plan-select');
        const numMobileLines = mobilePlanSelects.length;
        let totalMobileBaseCost = 0;
        let mobileLinesData = [];
        mobilePlanSelects.forEach(select => {
            const cost = parseInt(select.value) || 0;
            mobileLinesData.push({ cost: cost });
            totalMobileBaseCost += cost;
        });

        const isDongpanChecked = dongpanSalesCheckKtEl ? dongpanSalesCheckKtEl.checked : false;

        let currentInternet = getSelectedInternetInfo(internetPlanName);
        let internetBase = internetPlanName !== 'none' ? (parseFloat(currentInternet.basePrice) || 0) : 0;
        let modemRental = 0;
        let internetDiscount = 0;
        let actualWifiRouterFee = 0;

        let tvBase = 0;
        let currentTvDiscount = 0;
        let stbRental = 0;
        let phoneBase = 0;
        let phoneDiscount = 0;
        let additionalTvCost = 0;
        let addonServicesTotalCost = 0;

        if (internetPlanName !== 'none') {
            if (currentInternet.speed >= 1000 && internetType === 'standalone' && selectedWifiOptionName === "KT공유기 무료 (인단독 1GB)") {
                actualWifiRouterFee = 0;
            } else if (wifiOptions_KT[selectedWifiOptionName]) {
                actualWifiRouterFee = parseFloat(wifiOptions_KT[selectedWifiOptionName].fee) || 0;
            }
        }

        selectedAddonCheckboxes.forEach(checkbox => {
            addonServicesTotalCost += (parseFloat(checkbox.dataset.price) || 0);
        });

        let specificBundleInternetDiscountVal = 0;
        const isTvOrPhoneBundled = tvPlanName !== 'none' || phonePlanEl.value !== 'none';

        if (discountType === 'none' || internetPlanName === 'none') {
            internetDiscount = 0;
            currentTvDiscount = 0;
        } else {
            if (discountType === 'totalAmountBundle') {
                const internetSpeedType = currentInternet.speed === 100 ? "100M" : (currentInternet.speed === 500 ? "500M" : "1G");
                const bundleTypeForDiscountRule = isTvOrPhoneBundled ? "TV" : "단독";
                let mobileTierKey = "";

                if (numMobileLines > 0 && totalMobileBaseCost > 0) {
                    if (internetSpeedType === "100M") {
                        mobileTierKey = getMobileTierKey(totalMobileBaseCost, numMobileLines, internetSpeedType);
                    } else {
                        mobileTierKey = getMobileTierKeyFor500MUp(totalMobileBaseCost, numMobileLines);
                    }
                }

                if (mobileTierKey && newKtDiscountRules.총액결합할인?.[internetSpeedType]?.[bundleTypeForDiscountRule]?.[mobileTierKey]) {
                    specificBundleInternetDiscountVal = parseFloat(newKtDiscountRules.총액결합할인[internetSpeedType][bundleTypeForDiscountRule][mobileTierKey]) || 0;
                } else if (internetSpeedType === "1G" && bundleTypeForDiscountRule === "TV" && newKtDiscountRules.총액결합할인?.["1G"]?.TV?.["모바일_결합시"] && numMobileLines > 0) {
                    specificBundleInternetDiscountVal = parseFloat(newKtDiscountRules.총액결합할인["1G"]["TV"]["모바일_결합시"]) || 0;
                }

            } else if (discountType === 'premiumFamilyBundle') {
                const firstLineCost = mobileLinesData.length > 0 ? mobileLinesData[0].cost : 0;
                if (numMobileLines > 0 && firstLineCost >= 80000 && currentInternet.speed >= 500) {
                    const bundleTypeForDiscountRule = isTvOrPhoneBundled ? "_TV" : "_단독";
                    const speedKeyPart = currentInternet.speed >= 1000 ? "1G" : "500M";
                    const fullKey = speedKeyPart + bundleTypeForDiscountRule;
                    specificBundleInternetDiscountVal = parseFloat(newKtDiscountRules.프리미엄가족결합?.[fullKey]) || 0;
                }
            } else if (discountType === 'premiumSingleBundle') {
                const isInternetOnlyBundleForPS = !isTvOrPhoneBundled && additionalTvPlanKey === 'none';
                 const singleLineCost = numMobileLines === 1 ? mobileLinesData[0].cost : 0;
                if (singleLineCost >= 80000 && currentInternet.speed >= 500) {
                    if (isInternetOnlyBundleForPS) {
                        const speedKey = currentInternet.speed === 500 ? "500M_단독" : "1G_단독";
                        specificBundleInternetDiscountVal = parseFloat(newKtDiscountRules.프리미엄싱글결합?.[speedKey]) || 0;
                    }
                }
            } else if (discountType === 'mvnoBundle') {
                let speedKey = "";
                if (currentInternet.speed === 100) speedKey = "100M";
                else if (currentInternet.speed === 500) speedKey = "500M";
                else if (currentInternet.speed >= 1000) speedKey = "1G";

                if (speedKey) {
                    const bundleTypeForDiscountRule = isTvOrPhoneBundled ? "_TV" : "_단독";
                    const fullKey = speedKey + bundleTypeForDiscountRule;
                    specificBundleInternetDiscountVal = parseFloat(newKtDiscountRules.알뜰폰결합?.[fullKey]) || 0;
                }
            } else if (discountType === 'familyBundle') {
                let speedKey = "";
                if (currentInternet.speed === 100) speedKey = "100M";
                else if (currentInternet.speed === 500) speedKey = "500M";
                else if (currentInternet.speed >= 1000) speedKey = "1G";
                const bundleTypeForDiscountRule = isTvOrPhoneBundled ? "_TV" : "_단독";

                if (newKtDiscountRules.패밀리결합?.[speedKey + bundleTypeForDiscountRule]) {
                    specificBundleInternetDiscountVal = parseFloat(newKtDiscountRules.패밀리결합[speedKey + bundleTypeForDiscountRule]) || 0;
                }
            } else if (discountType === 'separateFamilyBundle') {
                if (isTvOrPhoneBundled) {
                    let speedKeyFor따살 = "";
                    if (currentInternet.speed === 500) speedKeyFor따살 = "500M_TV";
                    else if (currentInternet.speed >= 1000) speedKeyFor따살 = "1G_TV";

                    let mobileTierKeyFor따살 = getMobileTierKeyForSeparateFamily(totalMobileBaseCost, numMobileLines);

                    if (speedKeyFor따살 && mobileTierKeyFor따살 && newKtDiscountRules["따로살아도 가족결합"]?.[speedKeyFor따살]?.[mobileTierKeyFor따살]) {
                        specificBundleInternetDiscountVal = parseFloat(newKtDiscountRules["따로살아도 가족결합"][speedKeyFor따살][mobileTierKeyFor따살]) || 0;
                        currentTvDiscount = parseFloat(newKtDiscountRules["따로살아도 가족결합"][speedKeyFor따살].tvDiscount) || 0;
                    }
                }
            }
            internetDiscount = parseFloat(specificBundleInternetDiscountVal) || 0;
        }

        allDetailSections.forEach(section => {
            const radio = document.querySelector(`input[name="discountType"][value="${section.radioValue}"]`);
            if (radio && radio.checked && section.toggleEl && section.toggleEl.checked && section.updateFn) {
                section.updateFn();
            }
        });

        internetDiscount = Math.min(internetDiscount, internetBase);
        const finalInternetComponentCost_NoDiscount = internetBase + modemRental + actualWifiRouterFee;
        const finalInternetComponentCost_WithDiscount = internetBase - internetDiscount + modemRental + actualWifiRouterFee;

        let finalTvComponentCost_NoDiscount = 0;
        let finalTvComponentCost_WithDiscount = 0;
        if (tvPlanName !== 'none') {
            const currentTvPlan = tvPlans_KT[tvPlanName] || { basePrice: 0 };
            stbRental = 0;
            tvBase = parseFloat(currentTvPlan.basePrice) || 0;
            currentTvDiscount = Math.min(parseFloat(currentTvDiscount) || 0, tvBase);
            finalTvComponentCost_NoDiscount = tvBase + stbRental;
            finalTvComponentCost_WithDiscount = tvBase - currentTvDiscount + stbRental;
        }

        let additionalTvComponentCost_NoDiscount = 0;
        let additionalTvComponentCost_WithDiscount = 0;
        if (additionalTvPlanKey !== 'none' && additionalTvPlans_KT[additionalTvPlanKey]) {
            additionalTvCost = parseFloat(additionalTvPlans_KT[additionalTvPlanKey].basePrice) || 0;
            additionalTvComponentCost_NoDiscount = additionalTvCost;
            additionalTvComponentCost_WithDiscount = additionalTvCost;
        }

        let finalPhoneComponentCost_NoDiscount = 0;
        let finalPhoneComponentCost_WithDiscount = 0;
        if (phonePlanName !== 'none') {
            const currentPhonePlan = phonePlans_KT[phonePlanName] || { basePrice: 0 };
            phoneBase = parseFloat(currentPhonePlan.basePrice) || 0;
            finalPhoneComponentCost_NoDiscount = phoneBase;
            finalPhoneComponentCost_WithDiscount = phoneBase - (parseFloat(phoneDiscount) || 0);
        }

        let finalAddonServicesCost = addonServicesTotalCost;

        let finalMonthlyDisplayCost;
        let finalCostLabelText;

        if (displayMode === 'preApplied') {
            finalMonthlyDisplayCost = finalInternetComponentCost_WithDiscount + finalTvComponentCost_WithDiscount + additionalTvComponentCost_WithDiscount + finalPhoneComponentCost_WithDiscount + finalAddonServicesCost;
            finalCostLabelText = "최종 예상 월 납부액 (할인 적용)";
        } else { // postApplied
            finalMonthlyDisplayCost = finalInternetComponentCost_NoDiscount + finalTvComponentCost_NoDiscount + additionalTvComponentCost_NoDiscount + finalPhoneComponentCost_NoDiscount + finalAddonServicesCost;
            finalCostLabelText = "예상 월 기본료 총액 (할인 적용 전)";
        }


        totalBaseInternetCostEl.textContent = internetBase.toLocaleString();
        totalInternetDiscountAmountEl.textContent = internetDiscount.toLocaleString();
        internetModemRentalEl.textContent = modemRental.toLocaleString();
        wifiRouterRentalCostDisplayEl.textContent = actualWifiRouterFee.toLocaleString();

        if (tvPlanName !== 'none') {
            tvCostSummaryContainerEl.classList.remove('hidden');
            tvBaseCostDisplayEl.textContent = tvBase.toLocaleString();
            tvDiscountDisplayEl.textContent = currentTvDiscount.toLocaleString();
            stbRentalCostDisplayEl.textContent = stbRental.toLocaleString();
        } else {
            tvCostSummaryContainerEl.classList.add('hidden');
        }

        if (additionalTvPlanKey !== 'none') {
            additionalTvCostSummaryContainerEl.classList.remove('hidden');
            additionalTvCostDisplayEl.textContent = additionalTvCost.toLocaleString();
        } else {
            additionalTvCostSummaryContainerEl.classList.add('hidden');
        }

        if (phonePlanName !== 'none') {
            phoneCostSummaryContainerEl.classList.remove('hidden');
            phoneBaseCostDisplayEl.textContent = phoneBase.toLocaleString();
            phoneDiscountDisplayEl.textContent = phoneDiscount.toLocaleString();
        } else {
            phoneCostSummaryContainerEl.classList.add('hidden');
        }

        addonServicesSummaryContainerEl.classList.toggle('hidden', addonServicesTotalCost === 0);
        if (addonServicesTotalCost > 0) {
            addonServicesTotalCostDisplayEl.textContent = addonServicesTotalCost.toLocaleString();
        }

        finalMonthlyCostEl.textContent = finalMonthlyDisplayCost.toLocaleString();
        finalCostLabelEl.textContent = finalCostLabelText;


        let calculatedInstallationFee = 0;
        const hasInternet = internetPlanName !== 'none';
        const hasTv = tvPlanName !== 'none';
        const hasAdditionalTv = additionalTvPlanKey !== 'none';
        const hasPhone = phonePlanName !== 'none';
        const isGeneralPhone = phonePlanName === "KT일반 전화일반 전화";
        const is070Phone = phonePlanName === "KT일반 전화인터넷 전화 (모임스톤)" || phonePlanName === "KT일반 전화인터넷 (단독) 500mb 이상 + 인터넷 전화";


        if (hasInternet && hasTv && hasAdditionalTv) {
            calculatedInstallationFee = ktInstallationFees_new.internet_tv_addTv?.[installationTime] || 0;
        } else if (hasInternet && hasTv && hasPhone) {
            if (isGeneralPhone) calculatedInstallationFee = ktInstallationFees_new.internet_tv_phone_general?.[installationTime] || 0;
            else if (is070Phone) calculatedInstallationFee = ktInstallationFees_new.internet_tv_phone_070?.[installationTime] || 0;
            else calculatedInstallationFee = ktInstallationFees_new.internet_tv?.[installationTime] || 0;
        } else if (hasInternet && hasTv) {
            calculatedInstallationFee = ktInstallationFees_new.internet_tv?.[installationTime] || 0;
        } else if (hasInternet && hasPhone) {
            if (isGeneralPhone) calculatedInstallationFee = ktInstallationFees_new.internet_phone_general?.[installationTime] || 0;
            else if (is070Phone) calculatedInstallationFee = ktInstallationFees_new.internet_phone_070?.[installationTime] || 0;
            else calculatedInstallationFee = ktInstallationFees_new.internet_only?.[installationTime] || 0;
        } else if (hasInternet) {
            calculatedInstallationFee = ktInstallationFees_new.internet_only?.[installationTime] || 0;
        } else if (hasTv && !hasAdditionalTv && !hasPhone) {
            calculatedInstallationFee = ktInstallationFees_new.tv_only?.[installationTime] || 0;
        } else if (hasPhone && !hasInternet && !hasTv && !hasAdditionalTv ) {
            calculatedInstallationFee = ktInstallationFees_new.phone_only?.[installationTime] || 0;
        }


        selectedInternetEl.textContent = internetPlanName !== 'none' ? internetPlanEl.options[internetPlanEl.selectedIndex].text.split(" (")[0] : '미선택';
        selectedTvEl.textContent = tvPlanName !== 'none' ? tvPlanEl.options[tvPlanEl.selectedIndex].text.split(" (")[0] : '미선택';
        selectedStbEl.textContent = (tvPlanName !== 'none' && tvPlans_KT[tvPlanName]?.stbIncluded) ? tvPlans_KT[tvPlanName].stbIncluded : '미선택';
        selectedAdditionalTvEl.textContent = additionalTvPlanKey !== 'none' ? additionalTvPlans_KT[additionalTvPlanKey].name : '미선택';
        selectedPhoneEl.textContent = phonePlanName !== 'none' ? phonePlanEl.options[phonePlanEl.selectedIndex].text.split(" (")[0] : '미선택';
        selectedMobileCountEl.textContent = numMobileLines;

        const discountTypeMap = {
            none: "결합 할인 없음",
            totalAmountBundle: "총액 결합할인",
            premiumFamilyBundle: "프리미엄 가족결합",
            premiumSingleBundle: "프리미엄 싱글결합",
            mvnoBundle: "알뜰폰 결합",
            familyBundle: "패밀리 결합 (인터넷 추가회선)",
            separateFamilyBundle: "따로 살아도 가족결합"
        };
        selectedDiscountTypeEl.textContent = discountTypeMap[discountType] || "알 수 없음";
        installationCostResultEl.textContent = calculatedInstallationFee.toLocaleString();

        let giftCash = 0;
        let giftVoucher = 0;
        let giftPhoneVoucherAmount = 0;
        let giftAdditionalTvAmount = 0;
        let giftDongpanAdditionalCashAmount = 0;

        if (internetPlanName !== 'none') {
            const internetSpeed = currentInternet.speed;
            let tvCategoryForGift = "베이직";
            let giftKeyPrefix = "";
            const isTvSelectedForGift = tvPlanName !== 'none';

            if (!isTvSelectedForGift) {
                tvCategoryForGift = "베이직";
                if (internetSpeed === 100) giftKeyPrefix = "100단독";
                else if (internetSpeed === 500) giftKeyPrefix = "500단독";
                else if (internetSpeed >= 1000) giftKeyPrefix = "1G단독";
            } else {
                const selectedTvOption = tvPlanEl.options[tvPlanEl.selectedIndex];
                tvCategoryForGift = selectedTvOption.dataset.category || "베이직";
                if (internetSpeed === 100) giftKeyPrefix = "100번들";
                else if (internetSpeed === 500) giftKeyPrefix = "500번들";
                else if (internetSpeed >= 1000) giftKeyPrefix = "기가번들";
            }

            if (giftTable[tvCategoryForGift] && giftTable[tvCategoryForGift][giftKeyPrefix]) {
                giftCash = giftTable[tvCategoryForGift][giftKeyPrefix].cash;
                giftVoucher = giftTable[tvCategoryForGift][giftKeyPrefix].voucher;
            }

            if (isDongpanChecked && numMobileLines > 0) {
                const isTvBundledForDongpan = tvPlanName !== 'none';
                const dongpanBundleType = isTvBundledForDongpan ? "TV번들" : "단독";
                let internetGiftKeyPart = "";
                if (internetSpeed === 100) internetGiftKeyPart = "100M";
                else if (internetSpeed === 500) internetGiftKeyPart = "500M";
                else if (internetSpeed >= 1000) internetGiftKeyPart = "1G";

                const maxDongpanLines = isTvBundledForDongpan ? 3 : 1;

                for (let i = 0; i < Math.min(numMobileLines, maxDongpanLines); i++) {
                    const mobileLineFee = mobileLinesData[i].cost;
                    let mobileFeeTierKey = null;
                    if (mobileLineFee >= 37000 && mobileLineFee <= 58000) mobileFeeTierKey = "37K";
                    else if (mobileLineFee >= 61000 && mobileLineFee <= 89000) mobileFeeTierKey = "61K";
                    else if (mobileLineFee >= 90000 && mobileLineFee <= 110000) mobileFeeTierKey = "90K";

                    if (mobileFeeTierKey && internetGiftKeyPart) {
                        const giftKey = internetGiftKeyPart + "_" + dongpanBundleType;
                        if (dongpanAdditionalGiftTable_KT[mobileFeeTierKey] && dongpanAdditionalGiftTable_KT[mobileFeeTierKey][giftKey]) {
                            giftDongpanAdditionalCashAmount += dongpanAdditionalGiftTable_KT[mobileFeeTierKey][giftKey];
                        }
                    }
                }
            }
        }

        if (phonePlanName !== 'none') {
            giftPhoneVoucherAmount = 20000;
        }
        if (additionalTvPlanKey !== 'none') {
            giftAdditionalTvAmount = 30000;
        }

        dongpanCashContainerKtEl.classList.toggle('hidden', !isDongpanChecked || giftDongpanAdditionalCashAmount === 0);
        giftDongpanAdditionalCashKtEl.textContent = giftDongpanAdditionalCashAmount.toLocaleString();

        giftCashEl.textContent = giftCash.toLocaleString();
        giftVoucherEl.textContent = giftVoucher.toLocaleString();
        giftPhoneVoucherEl.textContent = giftPhoneVoucherAmount.toLocaleString();
        giftAdditionalTvEl.textContent = giftAdditionalTvAmount.toLocaleString();
        giftTotalEl.textContent = (giftCash + giftVoucher + giftPhoneVoucherAmount + giftAdditionalTvAmount + giftDongpanAdditionalCashAmount).toLocaleString();

        resultSection.classList.remove('hidden');
        messageScriptSectionEl.classList.remove('hidden');
        generateMessageScripts(displayMode, installationTime, discountType, isDongpanChecked, numMobileLines, finalInternetComponentCost_NoDiscount + finalTvComponentCost_NoDiscount + additionalTvComponentCost_NoDiscount + finalPhoneComponentCost_NoDiscount + finalAddonServicesCost, finalMonthlyCostEl.textContent);
    } catch (error) {
        console.error("계산 중 오류 발생:", error);
        alert("계산 중 오류가 발생했습니다. 입력 값을 확인하거나 잠시 후 다시 시도해주세요. 문제가 지속되면 개발자 콘솔(F12)의 오류 메시지를 확인해주세요.");
    }
}

function generateMessageScripts(displayModeParam, installTimeParam, discountTypeParam, isDongpanCheckedParam, numMobileLinesParam, totalPreDiscountCost, monthlyFeeForSummaryParam) {
    const internetOption = internetPlanEl.options[internetPlanEl.selectedIndex];
    const internetPlanText = internetOption.value !== 'none' ? internetOption.text.split(' (')[0] : '인터넷 미선택';

    const tvOption = tvPlanEl.options[tvPlanEl.selectedIndex];
    let firstTvText = "미선택";
    if (tvOption.value !== 'none' && tvPlans_KT[tvOption.value]) { firstTvText = tvOption.text.split(' (')[0];}

    const additionalTvPlanKey = additionalTvPlanEl.value;
    const additionalTvText = additionalTvPlanKey !== 'none' ? ` + (추가) ${additionalTvPlans_KT[additionalTvPlanKey].name}` : "";

    const phoneOption = phonePlanEl.options[phonePlanEl.selectedIndex];
    let phoneText = "미선택";
    if (phoneOption.value !== 'none' && phonePlans_KT[phoneOption.value]) {phoneText = phoneOption.text.split(' (')[0];}

    const wifiOption = wifiRouterRentalEl.options[wifiRouterRentalEl.selectedIndex];
    const wifiName = wifiOption ? wifiOption.dataset.name : "미선택";


    const giftAmount = giftTotalEl.textContent;
    const baseGift = (parseInt(giftCashEl.textContent.replace(/,/g, '')) || 0) +
        (parseInt(giftVoucherEl.textContent.replace(/,/g, '')) || 0) +
        (parseInt(giftPhoneVoucherEl.textContent.replace(/,/g, '')) || 0) +
        (parseInt(giftAdditionalTvEl.textContent.replace(/,/g, '')) || 0);
    const dongpanGift = parseInt(giftDongpanAdditionalCashKtEl.textContent.replace(/,/g, '')) || 0;

    const installFee = installationCostResultEl.textContent;
    const installTime = installTimeParam;

    let installFeeForWeekendMessage = "";
    const hasInternet = internetPlanEl.value !== 'none';
    const hasTv = tvPlanEl.value !== 'none';
    const hasAdditionalTv = additionalTvPlanKey !== 'none';

    if (hasInternet && hasTv && hasAdditionalTv && ktInstallationFees_new.internet_tv_addTv) {
        installFeeForWeekendMessage = ktInstallationFees_new.internet_tv_addTv.weekend.toLocaleString();
    } else if (hasInternet && hasTv && ktInstallationFees_new.internet_tv) {
        installFeeForWeekendMessage = ktInstallationFees_new.internet_tv.weekend.toLocaleString();
    } else if (hasInternet && ktInstallationFees_new.internet_only) {
        installFeeForWeekendMessage = ktInstallationFees_new.internet_only.weekend.toLocaleString();
    }
    else {
        installFeeForWeekendMessage = "별도 문의";
    }


    let productDescriptionMemo = internetPlanText;
    if (wifiName !== "KT공유기 X") {
        productDescriptionMemo += ` + ${wifiName}`;
    }
    if (firstTvText !== "미선택") productDescriptionMemo += ` + ${firstTvText}`;
    productDescriptionMemo += additionalTvText;
    if (phoneText !== "미선택") productDescriptionMemo += ` + ${phoneText}`;

    let memoDisplayModeText = "";
    let memoMonthlyFee = monthlyFeeForSummaryParam;

    switch(discountTypeParam) {
        case "premiumFamilyBundle":
        case "premiumSingleBundle":
        case "mvnoBundle":
        case "totalAmountBundle":
        case "none":
            memoDisplayModeText = "[후결합]";
            memoMonthlyFee = totalPreDiscountCost.toLocaleString();
            break;
        case "familyBundle":
        case "separateFamilyBundle":
            memoDisplayModeText = "[선결합]";
            memoMonthlyFee = monthlyFeeForSummaryParam;
            break;
        default:
            memoDisplayModeText = "[후결합]";
            memoMonthlyFee = totalPreDiscountCost.toLocaleString();
            break;
    }


    memoScriptEl.value = `[KT 미소 상담 메모]
1. 상품 : ${productDescriptionMemo}
2. 요금 : ${memoMonthlyFee}원 ${memoDisplayModeText}
3. 사은품 총액 : ${giftAmount}원 (기본 ${baseGift.toLocaleString()}원 + 동판추가(모바일연동) ${dongpanGift.toLocaleString()}원) (예상)
4. 설치비 : ${installFee}원 (${installTime === 'weekday' ? '평일' : '주말/야간'}) (KT 실제 비용 확인 필요, 주말/야간 할증 가능)
5. 결합적용시점: ${document.querySelector('input[name="displayModeKt"]:checked').parentElement.textContent.trim().split(' (')[0]}
6. 기타 : 이사 여부 [ ] / 희망설치일자 [   년   월   일]
7. 할인유형: ${selectedDiscountTypeEl.textContent}
9. 모바일결합회선: ${numMobileLinesParam}개
10. 동판판매가적용: ${isDongpanCheckedParam ? 'Y' : 'N'}`;

    let productDescriptionInfo = `▶️ ${internetPlanText}`;
    if (firstTvText !== "미선택") productDescriptionInfo += `\n▶️ ${firstTvText}`;
    if(additionalTvText) productDescriptionInfo += `\n▶️ (추가) ${additionalTvPlans_KT[additionalTvPlanKey].name}`;
    if (phoneText !== "미선택") productDescriptionInfo += `\n▶️ ${phoneText}`;


    infoScriptEl.value = `[미소] 상품 & 사은품 요약 안내
안녕하세요, 미소 인터넷 입니다.
고객님께서 오늘 상담 받으신 상품 안내드립니다.
${productDescriptionInfo}
▶️ 월 ${monthlyFeeForSummaryParam}원 ${displayModeParam === 'preApplied' ? '(할인 적용된 최종 금액)' : '(할인 적용 전 기본료)'}
▶️ 사은품 ${giftAmount}원
* 혜택은 실시간으로 바뀔 수 있다는 점 안내드립니다.
* 3년 약정 기준
미소 드림.`;

    let productDescriptionComplete = `▶️ ${internetPlanText}`;
    if (firstTvText !== "미선택") productDescriptionComplete += `\n▶️ ${firstTvText}`;
    if(additionalTvText) productDescriptionComplete += `\n▶️ (추가) ${additionalTvPlans_KT[additionalTvPlanKey].name}`;
    if (phoneText !== "미선택") productDescriptionComplete += `\n▶️ ${phoneText}`;


    completeScriptEl.value = `[미소] 가입 완료 안내
안녕하세요, 고객님.
미소 인터넷 부서입니다.
✅ 계약이 완료되었어요, 아래 내용은 계약서와 동일한 효력이 있으니 꼼꼼히 읽어주세요.
⚠️ 3년 약정이며, 아래와 같은 상황에 해당하면 받으셨던 사은품은 환수 됩니다.
① 1년 이내 해지
② 3개월 (90일) 이상 정지
③ 1년 이내 요금제 하향 (상향 시에는 환수 되지 않습니다!)
④ 3개월 이내 명의변경
⑤ 개통 1개월 이내 결제수단 지로청구서로 변경
⚠️ 신규 가입 후 기존에 인터넷은 꼭 해지 해주세요. 자동해지되지 않으며 이럴 경우 요금이 이중 부과되어요.
⚠️ 3년 이내 해지 시 통신사 본사에 위약금 (할인 반환금) 및 통신사에 따라 면제된 와이파이 / 통신기기 설치비 반환이 필요할 수 있어요.
✅ 가입 상품 안내
${productDescriptionComplete}
▶️ 월 ${monthlyFeeForSummaryParam}원 ${displayModeParam === 'preApplied' ? '(할인 적용된 최종 금액)' : '(할인 적용 전 기본료)'}
▶️ 설치비 ${installFee}원 첫 달 부과 ${installTime === 'weekday' ? '' : `(주말/야간 설치 시 ${installFeeForWeekendMessage}원)`}
▶️ 사은품 ${giftAmount}원
✅사은품은 설치 후 7일 이내 자동으로 지급되나 평일기준 5시 이전 개통 받았다고 문자 주시면 당일입금 도움드리겠습니다.
${installTime !== 'weekday' ? `-> 주말/야간 설치비는 ${installFeeForWeekendMessage}원 이십니다.` : ''}
🔊 해당 연락처로 연락이 어려울 경우 걱정하지 마세요! 아래 대표번호로 문의주시면 확인하여 연락드리겠습니다. 시간 양해 부탁드려요.
[미소를 소개해주세요]
지인이 미소에서 인터넷 설치하면 소개해주신 분에게 3만원 드려요.
▶ 지인에게 추천하고 3O,OOO원 받기 (↓)
https://get.miso.kr/pZbfsUPthzb
미소 드림.`;

    if (dongpanMemoScriptEl) {
        dongpanMemoScriptEl.value = `<백메가 유심동판 메모 양식>
고객명 :
동판유선명의자 :
연락처 :
기존통신사 :
유심발송주소 :
선택약정여부 (12개월/24개월) :
요금제 :
유심비 후청구 동의 (Y/N) :
★ 결합여부 (프리미엄가족/프리미엄싱글/총액) :
★ 할인지정(지정할인or기여도) :
★ 동판 결합인증 (URL 완료여부) :
★ 패스or신용카드 인증 :`;
    }
    if (sensitiveInfoLinkScriptEl) {
        sensitiveInfoLinkScriptEl.value = `[KT] 아래링크에 고객님의 민감정보를 입력하시면 KT로 고객님의 민감정보가 직접 전송됩니다
https://miso.kr/booking/forms/secure-details?querystring=고객님 전화번호`;
    }
}

function copyToClipboard(elementId, feedbackElementId) {
    const textarea = document.getElementById(elementId);
    if (!textarea) return;
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    try {
        document.execCommand('copy');
        const feedbackEl = document.getElementById(feedbackElementId);
        if (feedbackEl) feedbackEl.textContent = '복사되었습니다!';
        setTimeout(() => { if (feedbackEl) feedbackEl.textContent = ''; }, 2000);
    } catch (err) {
        const feedbackEl = document.getElementById(feedbackElementId);
        if (feedbackEl) feedbackEl.textContent = '복사 실패';
        setTimeout(() => { if (feedbackEl) feedbackEl.textContent = ''; }, 2000);
    }
    window.getSelection().removeAllRanges();
}

function setInitialDefaults() {
    populateInternetPlans();
    internetPlanEl.value = "KT인터넷번들1GB";
    tvPlanEl.value = "KTTV베이직";
    additionalTvPlanEl.value = "none";
    phonePlanEl.value = "none";
    wifiRouterRentalEl.value = "1100";

    const addonCheckboxes = document.querySelectorAll('#addonServicesContainer input[type="checkbox"]');
    addonCheckboxes.forEach(cb => cb.checked = false);

    mobileLinesCountEl.value = 0;
    updateMobileLinesInputs();
    document.querySelector('input[name="discountType"][value="totalAmountBundle"]').checked = true;
    document.querySelector('input[name="displayModeKt"][value="preApplied"]').checked = true;
    document.querySelector('input[name="installationTime"][value="weekday"]').checked = true;
    if (dongpanSalesCheckKtEl) {
        dongpanSalesCheckKtEl.checked = false;
        if(dongpanPolicyDetailsContainerKtEl) dongpanPolicyDetailsContainerKtEl.classList.add('hidden');
    }


    allDetailSections.forEach(section => {
        if (section.containerEl && section.toggleEl) {
            const isSelected = document.querySelector(`input[name="discountType"][value="${section.radioValue}"]`).checked;
            let shouldBeVisible = false;
            if (isSelected) {
                section.toggleEl.checked = false;
                shouldBeVisible = section.toggleEl.checked;
            } else {
                section.toggleEl.checked = false;
            }
            section.containerEl.classList.toggle('hidden', !shouldBeVisible);
            if (shouldBeVisible && section.updateFn) {
                section.updateFn();
            }
        }
    });
    const internetTypeChangeEvent = new Event('change');
    document.querySelector('input[name="internetType"]:checked').dispatchEvent(internetTypeChangeEvent);
    const discountTypeChangeEvent = new Event('change');
    document.querySelector('input[name="discountType"]:checked').dispatchEvent(discountTypeChangeEvent);
}

// Function to reset the entire calculator form
function resetCalculator() {
    setInitialDefaults(); // Reset all form fields to their default values
    resultSection.classList.add('hidden'); // Hide the result section
    messageScriptSectionEl.classList.add('hidden'); // Hide the message script section
    window.scrollTo(0, 0); // Scroll to the top of the page
}

window.onload = setInitialDefaults;

