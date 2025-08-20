// src/pages/BookingWizard.tsx
import React, { useState } from 'react';
import ServiceRequestForm from './ServiceRequestForm';

const brandOptions: Record<
  string,
  { logo: string; models: { name: string; image: string }[] }
> = {
  Apple: {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    models: [
      { name: 'iPhone 13', image: 'https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70' },
      { name: 'iPhone 12', image: 'https://rukminim2.flixcart.com/image/312/312/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dpyjvgg3j.jpeg?q=70' },
      { name: 'iPhone 11', image: 'https://rukminim2.flixcart.com/image/312/312/k2jbyq80pkrrdj/mobile-refurbished/u/z/t/iphone-11-256-c-mwmd2hn-a-apple-0-original-imafkg24wszdhzy3.jpeg?q=70' },
      { name: 'iPhone XR', image: 'https://rukminim2.flixcart.com/image/312/312/jnj7iq80/mobile/u/a/p/apple-iphone-xr-mryg2hn-a-original-imafa6zkzyntrt3t.jpeg?q=70' },
      { name: 'iPhone SE', image: 'https://rukminim2.flixcart.com/image/312/312/k9loccw0/mobile/6/b/z/apple-iphone-se-mxd12hn-a-original-imafrcqf9nze6evk.jpeg?q=70' },
      { name: 'Other Models', image: 'https://tse2.mm.bing.net/th/id/OIP.tJecJmIQGZOBGwVQ-1QniwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3' }
    ]
  },
  Samsung: {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg',
    models: [
      { name: 'Galaxy S23', image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/0/g/-original-imah4zp7fvqp8wev.jpeg?q=70' },
      { name: 'Galaxy A53', image: 'https://rukminim2.flixcart.com/image/312/312/l3xcr680/mobile/a/x/k/-original-imagexezkeefuadb.jpeg?q=70' },
      { name: 'Galaxy Note 10', image: 'https://rukminim2.flixcart.com/image/312/312/ki0loy80-0/mobile-panel/w/b/u/sgn10b-al-amazing-store-original-imafxwkphzys5m3g.jpeg?q=70' },
      { name: 'Galaxy S21', image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/y/g/-original-imagtnqkutcyzhgq.jpeg?q=70' },
      { name: 'Galaxy M33', image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/3/d/-original-imagdc8mjnhxbgxj.jpeg?q=70' },
      { name: 'Other Models', image: 'https://tse2.mm.bing.net/th/id/OIP.tJecJmIQGZOBGwVQ-1QniwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3' }
    ]
  },
  Xiaomi: {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg',
    models: [
      { name: 'Redmi Note 12', image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/r/i/note-12-5g-mzb0ei8in-redmi-original-imagpgr9gpmjjnwa.jpeg?q=70' },
      { name: 'Redmi 10', image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/i/p/10-220333qbi-redmi-original-imagrnpzup2tr72b.jpeg?q=70' },
      { name: 'Poco X3', image: 'https://rukminim2.flixcart.com/image/312/312/kfbfr0w0/mobile/f/x/r/poco-x3-mzb07z2in-original-imafvt3hz54npsba.jpeg?q=70' },
      { name: 'Mi 11', image: 'https://rukminim2.flixcart.com/image/312/312/kq6yefk0/mobile/a/2/2/11-lite-m2101k9ai-mi-original-imag496g7nhdabwq.jpeg?q=70' },
      { name: 'Mi A3', image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/z/1/a3-mzb0gnyin-redmi-original-imagy2wsmxhzdmbq.jpeg?q=70' },
      { name: 'Other Models', image: 'https://tse2.mm.bing.net/th/id/OIP.tJecJmIQGZOBGwVQ-1QniwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3' }
    ]
  },
  OnePlus: {
    logo: 'https://logos-world.net/wp-content/uploads/2023/03/OnePlus-Logo.png',
    models: [
      { name: 'OnePlus 11', image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/screen-guard/edge-to-edge-tempered-glass/p/n/8/uv-glass-1plus-11-5g-s3-snmart-original-imah39bvkby8vjeh.jpeg?q=70' },
      { name: 'OnePlus 10 Pro', image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/j/q/-original-imagkgshx9kfayxq.jpeg?q=70' },
      { name: 'OnePlus 9R', image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/y/m/-original-imagdnatwcty8hyw.jpeg?q=70' },
      { name: 'OnePlus Nord 2', image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/4/n/-original-imagdbfgmrkgcnub.jpeg?q=70' },
      { name: 'Nord CE', image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/n/u/nord-ce5-5g-cph2717-oneplus-original-imaheywzahvkwqkh.jpeg?q=70' },
      { name: 'Other Models', image: 'https://tse2.mm.bing.net/th/id/OIP.tJecJmIQGZOBGwVQ-1QniwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3' }
    ]
  },
  Oppo: {
    logo: 'https://pluspng.com/img-png/oppo-logo-png-img-oppo-logo-in-svg-vector-or-png-file-format-logo-wine-3000x2000.png',
    models: [
      { name: 'Reno 8', image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/v/o/3/-original-imaggg5rj8sdgzse.jpeg?q=70' },
      { name: 'F21 Pro', image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/g/j/f21-pro-cph2363-oppo-original-imagtchatgjwwchr.jpeg?q=70' },
      { name: 'Oppo A76', image: 'https://rukminim2.flixcart.com/image/312/312/l0zm64w0/mobile/g/g/j/-original-imagcnnfksn7wphz.jpeg?q=70' },
      { name: 'Oppo A54', image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/2/a/t/-original-imagnrhknw9pbg3t.jpeg?q=70' },
      { name: 'Find X8', image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/v/i/-original-imah6zxc9492ahqs.jpeg?q=70' },
      { name: 'Other Models', image: 'https://tse2.mm.bing.net/th/id/OIP.tJecJmIQGZOBGwVQ-1QniwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3' }
    ]
  },
  Vivo: {
    logo: 'https://logos-world.net/wp-content/uploads/2023/03/Vivo-Logo.jpg',
    models: [
      { name: 'Vivo V25', image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/u/h/-original-imagtk6hfxxbbang.jpeg?q=70' },
      { name: 'Vivo Y21', image: 'https://rukminim2.flixcart.com/image/312/312/ko1smfk0/mobile/r/v/p/v21-5g-pd2083f-ex-vivo-original-imag2kzc5ahy9cfk.jpeg?q=70' },
      { name: 'Vivo Y20', image: 'https://rukminim2.flixcart.com/image/312/312/kfikya80/mobile/p/g/g/vivo-v20-v2025-pd2039f-in-original-imafvyhyageajey4.jpeg?q=70' },
      { name: 'Vivo T4x', image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/t/v/-original-imahavdv28z4nrkn.jpeg?q=70' },
      { name: 'Vivo S1', image: 'https://rukminim2.flixcart.com/image/312/312/k3xcdjk0pkrrdj/mobile/v/9/f/vivo-s1-vivo-1907-pd1913f-ex-original-imafgyfpc5stcsbg.jpeg?q=70' },
      { name: 'Other Models', image: 'https://tse2.mm.bing.net/th/id/OIP.tJecJmIQGZOBGwVQ-1QniwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3' }
    ]
  },
  Realme: {
    logo: 'https://c.realme.com/in/img/logo.a7643831.png',
    models: [
      { name: 'Narzo 50', image: 'https://rukminim2.flixcart.com/image/312/312/l0bbonk0/shopsy-mobile/k/4/l/-original-imagc4qjnkzhty3h.jpeg?q=70' },
      { name: 'Realme 9', image: 'https://rukminim2.flixcart.com/image/312/312/l3t2fm80/mobile/v/0/b/-original-imageu8ctfzzstqp.jpeg?q=70' },
      { name: 'Realme C55', image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/l/m/-original-imagp55fu6uq2jch.jpeg?q=70' },
      { name: 'Realme C35', image: 'https://rukminim2.flixcart.com/image/312/312/l0fm07k0/mobile/1/k/g/-original-imagc7ukmgugpdfy.jpeg?q=70' },
      { name: 'Realme 8', image: 'https://rukminim2.flixcart.com/image/312/312/kmmcrrk0/mobile/4/g/a/8-rmx3085-realme-original-imagfgpfdkyc29zc.jpeg?q=70' },
      { name: 'Other Models', image: 'https://tse2.mm.bing.net/th/id/OIP.tJecJmIQGZOBGwVQ-1QniwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3' }
    ]
  },
  Google: {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    models: [
      { name: 'Pixel 7', image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/2/y/-original-imaggswcffkgcupp.jpeg?q=70' },
      { name: 'Pixel 6a', image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/g/3/-original-imaggbrccwsnygar.jpeg?q=70' },
      { name: 'Pixel 5', image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/g/3/-original-imaggbrccwsnygar.jpeg?q=70' },
      { name: 'Pixel 8a', image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/y/n/pixel-8a-ga04432-in-google-original-imahyn3mqzdbzywg.jpeg?q=70' },
      { name: 'Pixel 9', image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/p/t/-original-imahegqhrtpsz7sd.jpeg?q=70' },
      { name: 'Other Models', image: 'https://tse2.mm.bing.net/th/id/OIP.tJecJmIQGZOBGwVQ-1QniwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3' }
    ]
  },
  Motorola: {
    logo: 'https://www.pngmart.com/files/22/Motorola-Logo-PNG-Isolated-HD.png',
    models: [
      { name: 'Moto G24', image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/w/j/g24-pb1c0000in-motorola-original-imagxm3afhhxpqz9.jpeg?q=70' },
      { name: 'Moto G60', image: 'https://rukminim2.flixcart.com/image/312/312/l0o6nbk0/mobile/y/s/e/-original-imagceu559m75mks.jpeg?q=70' },
      { name: 'Moto G32', image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/m/f/-original-imaggvfz5xvn4j93.jpeg?q=70' },
      { name: 'Edge 30', image: 'https://rukminim2.flixcart.com/image/312/312/l2xmqvk0/mobile/o/r/n/-original-image674ydfks6se.jpeg?q=70' },
      { name: 'Moto E40', image: 'https://rukminim2.flixcart.com/image/312/312/l1l1rww0/mobile/v/7/n/-original-imagd48zkjwujxzz.jpeg?q=70' },
      { name: 'Other Models', image: 'https://tse2.mm.bing.net/th/id/OIP.tJecJmIQGZOBGwVQ-1QniwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3' }
    ]
  },
  Huawei: {
    logo: 'https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo.png',
    models: [
      { name: 'Huawei P50 Pro', image: 'https://auhuawei.imgix.net/wp-content/uploads/2022/05/eCom-Main-Product-Image.png?auto=compress%2Cformat&ixlib=php-3.3.1&q=80' },
      { name: 'Huawei Nova 9', image: 'https://tse4.mm.bing.net/th/id/OIP.vfod3du2CDbVIgWPyKXWFQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' },
      { name: 'Mate 40', image: 'https://img.gkbcdn.com/s3/p/2020-12-28/HUAWEI-Mate-40-CN-Version-6-5-inch-8GB-128GB-427101-0.jpg' },
      { name: 'Huawei Y9a', image: 'https://tse1.mm.bing.net/th/id/OIP.2skmih7mxmz7_VfSyr8VbQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' },
      { name: 'Huawei Y7', image: 'https://tse3.mm.bing.net/th/id/OIP.-G3etdz0TdLW7qVmV0g2JgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' },
      { name: 'Other Models', image: 'https://tse2.mm.bing.net/th/id/OIP.tJecJmIQGZOBGwVQ-1QniwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3' }
    ]
  }
};

  

const issueOptions = [
  'Screen Replacement',
  'Battery Problem',
  'Charging Port Issue',
  'Water Damage',
  'Software Issue'
];

const BookingWizard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedIssue, setSelectedIssue] = useState('');

  const handleBrandSelect = (brand: string) => {
    setSelectedBrand(brand);
    setStep(2);
  };

  const handleModelSelect = (model: string) => {
    setSelectedModel(model);
    setStep(3);
  };

  const handleIssueSelect = (issue: string) => {
    setSelectedIssue(issue);
    setStep(4);
  };

  const handleGoBack = () => {
    setStep(step - 1);
  };

  // Step 4: Show ServiceRequestForm with pre-filled values
  if (step === 4) {
    return (
      <div className="p-6">
        <div className="mb-4">
          <span className="mr-4 p-2 bg-blue-100 text-blue-600 rounded-lg">{selectedBrand}</span>
          <span className="mr-4 p-2 bg-blue-100 text-blue-600 rounded-lg">{selectedModel}</span>
          <span className="p-2 bg-blue-100 text-blue-600 rounded-lg">{selectedIssue}</span>
        </div>
        <ServiceRequestForm
          preFilled={{ brand: selectedBrand, model: selectedModel, issue: selectedIssue }}
        />
      </div>
    );
  }

// Step 1: select brand
if (step === 1) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-6">Select Your Device Brand</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {Object.keys(brandOptions).map((brand) => (
            <button
              key={brand}
              onClick={() => handleBrandSelect(brand)}
              className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-100 transition"
            >
              <img src={brandOptions[brand].logo} alt={brand} className="h-12 mb-2" />
              <span className="text-gray-700">{brand}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }
  
  

  // Step 2: select model
if (step === 2) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-6">Select Model ({selectedBrand})</h2>
        <button onClick={handleGoBack} className="text-blue-500 mb-4">← Back</button>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {brandOptions[selectedBrand].models.map((modelObj) => (
            <button
              key={modelObj.name}
              onClick={() => handleModelSelect(modelObj.name)}
              className="p-4 border rounded-lg text-gray-700 hover:bg-gray-100 flex flex-col items-center"
            >
              <img src={modelObj.image} alt={modelObj.name} className="mb-2 w-24 h-24 object-contain" />
              <span>{modelObj.name}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }
  

  // Step 3: select issue
  if (step === 3) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-6">Select Issue</h2>
        <button onClick={handleGoBack} className="text-blue-500 mb-4">← Back</button>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {issueOptions.map((issue) => (
            <button
              key={issue}
              onClick={() => handleIssueSelect(issue)}
              className="p-4 border rounded-lg text-gray-700 hover:bg-gray-100"
            >
              {issue}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default BookingWizard;
