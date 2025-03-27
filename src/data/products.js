// src/data/products.js
const products = [
  {
    id: 'M1',
    name: 'আখের পাউডার গুড় (Powder Gur)',
    category: 'Molasses',
    price: 700,
    image: '/gur/powdergur.png',
    details: 'এটি বিশুদ্ধ আখ থেকে তৈরি উচ্চমানের পাউডার গুড়। মিষ্টি তৈরি, স্বাস্থ্যকর পানীয় এবং রান্নায় ব্যবহারের জন্য উপযোগী। প্রাকৃতিক শর্করা এবং খনিজ লবণে সমৃদ্ধ। প্রতি ১০০ গ্রামে প্রায়: ৩৮৩ ক্যালোরি, ৯৮ গ্রাম কার্বোহাইড্রেট, ০.৫ গ্রাম প্রোটিন এবং আয়রন ও ম্যাগনেসিয়ামের উৎস।',
    availability: 'available',
    পরিমাণ: '২ কেজি',
    deliveryCharge: 0, // Free delivery
  },
  {
    id: 'M2',
    name: 'আখের দানাদার গুড় (Danadar Gur)',
    category: 'Molasses',
    price: 650,
    image: '/gur/danadargur.png',
    details: 'এটি আখ থেকে তৈরি দানাদার গুড় যা গভীর স্বাদ ও প্রাকৃতিক মিষ্টি নিয়ে আসে। ঐতিহ্যবাহী রেসিপি, পায়েস বা চা-এর সাথে উপযোগী। প্রতি ১০০ গ্রামে প্রায় ৩৮০ ক্যালোরি, ৯৭ গ্রাম কার্বোহাইড্রেট, ০.৫ গ্রাম প্রোটিন এবং ক্যালসিয়াম ও পটাশিয়াম সরবরাহ করে।',
    availability: 'available',
    পরিমাণ: '২ কেজি',
    deliveryCharge: 0, // Free delivery
  },
  {
    id: 'M3',
    name: 'আখের পাটালি গুড় (Patali Gur)',
    category: 'Molasses',
    price: 600,
    image: '/gur/pataligur.png',
    details: 'এটি আখ থেকে তৈরি পাটালি গুড়, যা অদ্বিতীয় স্বাদ ও গঠনের জন্য পরিচিত। ঐতিহ্যবাহী বাঙালি মিষ্টি এবং স্বাস্থ্যকর স্ন্যাক হিসেবে ব্যবহৃত হয়। প্রতি ১০০ গ্রামে প্রায় ৩৮৫ ক্যালোরি, ৯৮ গ্রাম কার্বোহাইড্রেট, এবং আয়রন ও ভিটামিন B6-এর উৎস।',
    availability: 'unavailable',
    পরিমাণ: '২ কেজি',
    deliveryCharge: 0, // Free delivery
  },
  {
    id: 'S1',
    name: 'মরিচ গুঁড়া (Chili Powder)',
    category: 'Spices',
    price: 150,
    image: '/spices/chilipowder.png',
    details: 'তাজা মরিচ থেকে তৈরি গুঁড়া, যা আপনার খাবারে তীব্রতা যোগ করে। রান্নায় স্বাদ বাড়াতে এবং পোষকতা যোগ করে। প্রতি ১০০ গ্রামে প্রায় ২৮২ ক্যালোরি, ৪৯ গ্রাম কার্বোহাইড্রেট, ১২ গ্রাম প্রোটিন, ভিটামিন A, C এবং ক্যাপসাইসিনের উৎস।',
    availability: 'unavailable',
    পরিমাণ: '১০০ গ্রাম',
    deliveryCharge: 0, // Free delivery
  },
  {
    id: 'S2',
    name: 'হলুদ গুঁড়া (Turmeric Powder)',
    category: 'Spices',
    price: 120,
    image: '/spices/turmericpowder.png',
    details: 'জৈব হলুদ গুঁড়া, যা স্বাস্থ্য উপকারিতার জন্য বিখ্যাত। এটি এন্টিঅক্সিডেন্ট এবং পরিষ্কার ত্বকের জন্য উপযোগী। প্রতি ১০০ গ্রামে প্রায় ৩১২ ক্যালোরি, ৬৫ গ্রাম কার্বোহাইড্রেট, ৮ গ্রাম প্রোটিন, এবং কারকুমিন ও আয়রন সমৃদ্ধ।',
    availability: 'unavailable',
    পরিমাণ: '১০০ গ্রাম',
    deliveryCharge: 0, // Free delivery
  },
  {
    id: 'S3',
    name: 'চিয়া সিড (Chia Seed)',
    category: 'Spices',
    price: 600,
    image: '/spices/chiaseed.png',
    details: 'পুষ্টিকর চিয়া সিড, যা স্বাস্থ্যকর খাদ্যাভ্যাসের জন্য উপযোগী। ওমেগা-৩, ফাইবার এবং প্রোটিনে সমৃদ্ধ। প্রতি ১০০ গ্রামে প্রায় ৪৮৬ ক্যালোরি, ৪২ গ্রাম কার্বোহাইড্রেট, ১৭ গ্রাম প্রোটিন, এবং ক্যালসিয়াম ও ম্যাগনেসিয়াম সরবরাহ করে।',
    availability: 'unavailable',
    পরিমাণ: '১০০ গ্রাম',
    deliveryCharge: 0, // Free delivery
  },
  {
    id: 'MG1-11',
    name: 'ক্ষীরসাপাত / হিমসাগর আম (Khirsapat / Himsagar Mango)',
    category: 'Mango',
    price: 2500,
    image: '/mango/khirsapat.png',
    details: 'আমাদের ফার্ম থেকে সরাসরি সরবরাহিত হিমসাগর আম, যা মিষ্টি ও পাকা। ভিটামিন C এবং এন্টিঅক্সিডেন্টে সমৃদ্ধ। প্রতি ১০০ গ্রামে প্রায় ৬০ ক্যালোরি, ১৫ গ্রাম কার্বোহাইড্রেট, ০.৫ গ্রাম প্রোটিন।',
    availability: 'unavailable',
    পরিমাণ: '১১ কেজি ক্রেট',
    deliveryCharge: 0, // Free delivery
  },
  {
    id: 'MG1-22',
    name: 'ক্ষীরসাপাত / হিমসাগর আম (Khirsapat / Himsagar Mango)',
    category: 'Mango',
    price: 5000,
    image: '/mango/khirsapat.png',
    details: 'আমাদের ফার্ম থেকে সরাসরি সরবরাহিত হিমসাগর আম, যা মিষ্টি ও পাকা। ভিটামিন C এবং এন্টিঅক্সিডেন্টে সমৃদ্ধ। প্রতি ১০০ গ্রামে প্রায় ৬০ ক্যালোরি, ১৫ গ্রাম কার্বোহাইড্রেট, ০.৫ গ্রাম প্রোটিন।',
    availability: 'unavailable',
    পরিমাণ: '২২ কেজি ক্রেট',
    deliveryCharge: 0, // Free delivery
  },
  {
    id: 'MG2-11',
    name: 'আম্রপালি আম (Amropali Mango)',
    category: 'Mango',
    price: 2500,
    image: '/mango/amropali.png',
    details: 'আম্রপালি আম, যার অদ্বিতীয় স্বাদ ও সুস্বাদু রস। ভিটামিন A ও C-এ সমৃদ্ধ। প্রতি ১০০ গ্রামে প্রায় ৬০ ক্যালোরি, ১৫ গ্রাম কার্বোহাইড্রেট, ০.৫ গ্রাম প্রোটিন।',
    availability: 'unavailable',
    পরিমাণ: '১১ কেজি ক্রেট',
    deliveryCharge: 0, // Free delivery
  },
  {
    id: 'MG2-22',
    name: 'আম্রপালি আম (Amropali Mango)',
    category: 'Mango',
    price: 5000,
    image: '/mango/amropali.png',
    details: 'আম্রপালি আম, যার অদ্বিতীয় স্বাদ ও সুস্বাদু রস। ভিটামিন A ও C-এ সমৃদ্ধ। প্রতি ১০০ গ্রামে প্রায় ৬০ ক্যালোরি, ১৫ গ্রাম কার্বোহাইড্রেট, ০.৫ গ্রাম প্রোটিন।',
    availability: 'unavailable',
    পরিমাণ: '২২ কেজি ক্রেট',
    deliveryCharge: 0, // Free delivery
  },
  {
    id: 'MG3-11',
    name: 'ল্যাংড়া আম (Langra Mango)',
    category: 'Mango',
    price: 2500,
    image: '/mango/langra.png',
    details: 'প্রকৃত ল্যাংড়া আম, যা তীক্ষ্ণ ও মিষ্টি স্বাদে পরিচিত। ভিটামিন E ও ফাইবারে সমৃদ্ধ। প্রতি ১০০ গ্রামে প্রায় ৬৫ ক্যালোরি, ১৭ গ্রাম কার্বোহাইড্রেট, ০.৬ গ্রাম প্রোটিন।',
    availability: 'unavailable',
    পরিমাণ: '১১ কেজি ক্রেট',
    deliveryCharge: 0, // Free delivery
  },
  {
    id: 'MG3-22',
    name: 'ল্যাংড়া আম (Langra Mango)',
    category: 'Mango',
    price: 5000,
    image: '/mango/langra.png',
    details: 'প্রকৃত ল্যাংড়া আম, যা তীক্ষ্ণ ও মিষ্টি স্বাদে পরিচিত। ভিটামিন E ও ফাইবারে সমৃদ্ধ। প্রতি ১০০ গ্রামে প্রায় ৬৫ ক্যালোরি, ১৭ গ্রাম কার্বোহাইড্রেট, ০.৬ গ্রাম প্রোটিন।',
    availability: 'unavailable',
    পরিমাণ: '২২ কেজি ক্রেট',
    deliveryCharge: 0, // Free delivery
  },
  {
    id: 'MG4-11',
    name: 'ফজলি আম (Fazli Mango)',
    category: 'Mango',
    price: 2000,
    image: '/mango/fazli.png',
    details: 'বড় ফজলি আম, যা মিষ্টান্ন তৈরির জন্য উপযোগী। ভিটামিন C ও অ্যান্টিঅক্সিডেন্টে সমৃদ্ধ। প্রতি ১০০ গ্রামে প্রায় ৬০ ক্যালোরি, ১৫ গ্রাম কার্বোহাইড্রেট, ০.৫ গ্রাম প্রোটিন।',
    availability: 'unavailable',
    পরিমাণ: '১১ কেজি ক্রেট',
    deliveryCharge: 0, // Free delivery
  },
  {
    id: 'MG4-22',
    name: 'ফজলি আম (Fazli Mango)',
    category: 'Mango',
    price: 4000,
    image: '/mango/fazli.png',
    details: 'বড় ফজলি আম, যা মিষ্টান্ন তৈরির জন্য উপযোগী। ভিটামিন C ও অ্যান্টিঅক্সিডেন্টে সমৃদ্ধ। প্রতি ১০০ গ্রামে প্রায় ৬০ ক্যালোরি, ১৫ গ্রাম কার্বোহাইড্রেট, ০.৫ গ্রাম প্রোটিন।',
    availability: 'unavailable',
    পরিমাণ: '২২ কেজি ক্রেট',
    deliveryCharge: 0, // Free delivery
  },
  {
    id: 'OG1',
    name: 'ঘানি ভাংগা সরিষার তেল (Mustard Oil)',
    category: 'oil-and-ghee',
    price: 1350,
    image: '/mustard-oil/mustard.png',
    details: 'তাজা সরিষা বীজ থেকে নিষ্কাশিত বিশুদ্ধ তেল, যা রান্না ও স্বাস্থ্যের জন্য উপযোগী। ওমেগা-৩ এবং অ্যান্টিব্যাকটেরিয়াল গুণে সমৃদ্ধ। প্রতি ১০০ গ্রামে প্রায় ৮৮৪ ক্যালোরি, ১০০ গ্রাম ফ্যাট (৬০% মনোস্যাচুরেটেড)।',
    availability: 'available',
    পরিমাণ: '৫ লিটার',
    deliveryCharge: 0, // Free delivery
  },
  {
    id: 'OG2',
    name: 'ঘি (Desi Ghee)',
    category: 'oil-and-ghee',
    price: 1350,
    image: '/ghee/ghee.png',
    details: 'গরুর দুধ থেকে তৈরি ঐতিহ্যবাহী দেশি ঘি, যা রান্না ও স্বাস্থ্য উন্নয়নে ব্যবহৃত হয়। ভিটামিন A, D, E, K এবং মাধ্যাকর্ষী ফ্যাটে সমৃদ্ধ। প্রতি ১০০ গ্রামে প্রায় ৯০০ ক্যালোরি, ১০০ গ্রাম ফ্যাট (৬২% স্যাচুরেটেড)।',
    availability: 'available',
    পরিমাণ: '১ কেজি',
    deliveryCharge: 0, // Free delivery
  },
];

export default products;
