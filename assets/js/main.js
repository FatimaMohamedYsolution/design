

/***********************************التشبع*********************************/ 

document.addEventListener('DOMContentLoaded', () => {
  const toggleSaturateMode = document.getElementById('toggleSaturateMode');
  const toggleSaturateStepOne = document.getElementById('toggleSaturateStepOne');
  const toggleSaturateStepTwo = document.getElementById('toggleSaturateStepTwo');
  const toggleSaturateStepThree = document.getElementById('toggleSaturateStepThree');
  const html = document.documentElement;

  // قائمة الأوضاع
  const modes = ['saturateNo', 'saturateLow','saturateHigh'];

  // استرجاع الوضع الحالي من localStorage
  let currentModeIndex = localStorage.getItem('colorModeIndex') || 0;
  currentModeIndex = parseInt(currentModeIndex);

  // ضبط الوضع الحالي عند التحميل
  html.classList.add(modes[currentModeIndex]);

  
  // مصفوفة الألوان لتغيير خلفية الخطوات
  const stepColors = ['#052976','#9EA4FF'] // ألوان مختلفة لكل تبديل

  // تبديل الأوضاع عند الضغط على الزر
  toggleSaturateMode.addEventListener('click', () => {
    toggleSaturateMode.style.border="1px solid #9EA4FF";

      // إزالة الوضع الحالي
      html.classList.remove(modes[currentModeIndex]);

      // التبديل إلى الوضع التالي
      currentModeIndex = (currentModeIndex + 1) % modes.length;

      // إضافة الوضع الجديد
      html.classList.add(modes[currentModeIndex]);

      // تغيير لون خلفية الخطوات بناءً على التبديل
      if (currentModeIndex === 0) {
        toggleSaturateStepOne.style.backgroundColor = stepColors[0];
        toggleSaturateStepTwo.style.backgroundColor = stepColors[1];
        toggleSaturateStepThree.style.backgroundColor = stepColors[1];
      } else if (currentModeIndex === 1) {
        toggleSaturateStepOne.style.backgroundColor = stepColors[0];
        toggleSaturateStepTwo.style.backgroundColor = stepColors[0];
        toggleSaturateStepThree.style.backgroundColor = stepColors[1];
      } else if (currentModeIndex === 2) {
        toggleSaturateStepOne.style.backgroundColor = stepColors[0];
        toggleSaturateStepTwo.style.backgroundColor = stepColors[0];
        toggleSaturateStepThree.style.backgroundColor = stepColors[0];
      }

      // حفظ الوضع في localStorage
      localStorage.setItem('colorModeIndex', currentModeIndex);

          // التحقق من عدد الضغطات
    clickCount++;
    if (clickCount === 4) {
      // إعادة الألوان إلى الوضع الافتراضي عند الضغط للمرة الرابعة
      toggleSaturateStepOne.style.backgroundColor = '';
      toggleSaturateStepTwo.style.backgroundColor = '';
      toggleSaturateStepThree.style.backgroundColor = '';
      toggleSaturateMode.style.border="";


      // إعادة الوضع الافتراضي
      currentModeIndex = 0;
      html.classList.remove(modes[1], modes[2]);
      html.classList.add(modes[currentModeIndex]);

      // حفظ الوضع الافتراضي في localStorage
      localStorage.setItem('currentModeIndex', currentModeIndex);

      // إعادة عدد الضغطات إلى الصفر
      clickCount = 0;
    }

  });
});

/*****************************************التباين******************************************/ 


document.addEventListener('DOMContentLoaded', () => {
  const toggleInvertMode = document.getElementById('toggleInvertMode');

  const html = document.documentElement;

  // قائمة الأوضاع
  const modes = ['light-mode', 'dark-mode'];

  // استرجاع الوضع الحالي من localStorage
  let colorModeInvert = localStorage.getItem('colorModeInvert') || 0;
  colorModeInvert = parseInt(colorModeInvert);

  // ضبط الوضع الحالي عند التحميل
  html.classList.add(modes[colorModeInvert]);

  // تبديل الأوضاع عند الضغط على الزر
  toggleInvertMode.addEventListener('click', () => {
    // إزالة الوضع الحالي
    html.classList.remove(modes[colorModeInvert]);

    // التبديل إلى الوضع التالي
    colorModeInvert = (colorModeInvert + 1) % modes.length;

    // إضافة الوضع الجديد
    html.classList.add(modes[colorModeInvert]);

    // تغيير لون خلفية المؤشر بناءً على الوضع
    if (colorModeInvert === 0) {
      toggleInvertMode.style.border = ""; // إزالة التحديد
    } else {
      toggleInvertMode.style.border = "1px solid #9EA4FF"; // إضافة تحديد
    }

    // حفظ الوضع الجديد في localStorage
    localStorage.setItem('colorModeInvert', colorModeInvert);
  });
});


/*******************************التباعد بين الاحرف*********************************/ 

document.addEventListener('DOMContentLoaded', () => {
          const elements = document.querySelectorAll("*");
          const stepOne = document.getElementById('letterSpacingStepOne');
          const stepTwo = document.getElementById('letterSpacingStepTwo');
          const stepThree = document.getElementById('letterSpacingStepThree');
          const toggleLetterSpacingBtn = document.getElementById('increaseLetterSpacingBtn');
          // استرجاع الإعدادات المخزنة في localStorage
          let letterSpacingstep = parseInt(localStorage.getItem('letterSpacingstep')) || 0; // استرجاع خطوة التباعد الحالية من localStorage
        
          const applyLetterSpacing = () => {
            let spacing;
            let colorOne, colorTwo, colorThree, toggleColor;
        
            switch (letterSpacingstep) {
              case 0:
                spacing = "1.6px"; 
                colorOne = "#052976"; 
                colorTwo = "#9EA4FF"; 
                colorThree = "#9EA4FF"; 
                toggleColor = "1px solid #9EA4FF"; 
                break;
              case 1:
                spacing = "1.7px"; 
                colorOne = "#052976"; 
                colorTwo = "#052976"; 
                colorThree = "#9EA4FF"; 
                toggleColor = "1px solid #9EA4FF"; 
                break;
              case 2:
                spacing = "1.8px"; 
                colorOne = "#052976"; 
                colorTwo = "#052976"; 
                colorThree = "#052976"; 
                toggleColor = "1px solid #9EA4FF"; 
                break;
              case 3:
                spacing = ""; 
                colorOne = "#9EA4FF"; 
                colorTwo = "#9EA4FF"; 
                colorThree = "#9EA4FF"; 
                toggleColor = ""; 
                break;
            }
        
            // تطبيق التباعد على جميع العناصر
            elements.forEach(element => {
              element.style.letterSpacing = spacing;
            });
        
            // تطبيق الألوان على كل خطوة
            stepOne.style.backgroundColor = colorOne;
            stepTwo.style.backgroundColor = colorTwo;
            stepThree.style.backgroundColor = colorThree;
        
            // تغيير لون زر التباعد
            toggleLetterSpacingBtn.style.border = toggleColor;
          };
        
          // تطبيق التباعد والأنماط عند تحميل الصفحة
          applyLetterSpacing();
        
          // عند الضغط على الزر، تغيير التباعد وحفظ الإعدادات في localStorage
          toggleLetterSpacingBtn.addEventListener('click', () => {
            letterSpacingstep = (letterSpacingstep + 1) % 4; // الانتقال إلى المرحلة التالية، وعند الوصول إلى 4 نعود للمرحلة 0
            localStorage.setItem('letterSpacingstep', letterSpacingstep); // حفظ الرقم الحالي في localStorage
            applyLetterSpacing(); // تطبيق التباعد الجديد
          });
        });
        
/*******************************ارتفاع الخط*********************************/ 

        document.addEventListener('DOMContentLoaded', () => {
          let lineHeightStep = parseInt(localStorage.getItem('lineHeightStep')) || 0; // استرجاع الرقم الحالي للتباعد بين الأسطر من localStorage
          const elements = document.querySelectorAll("*");
          const toggleLineheight = document.getElementById('toggleLineheight');
          const linesStepOne = document.getElementById('linesStepOne');
          const linesStepTwo = document.getElementById('linesStepTwo');
          const linesStepThree = document.getElementById('linesStepThree');
          
          // دالة لتطبيق التباعد بين الأسطر
          const applyLineHeight = () => {
            let spacing;
            let colorOne, colorTwo, colorThree, toggleColor;
        
            switch (lineHeightStep) {
              case 0:
                spacing = "1.8"; // التباعد الأول
                colorOne = "#052976"; 
                colorTwo = "#9EA4FF"; 
                colorThree = "#9EA4FF"; 
                toggleColor = "1px solid #9EA4FF"; 
                break;
              case 1:
                spacing = "2"; // التباعد الثاني
                colorOne = "#052976"; 
                colorTwo = "#052976"; 
                colorThree = "#9EA4FF"; 
                toggleColor = "1px solid #9EA4FF"; 
                break;
              case 2:
                spacing = "2.5"; // التباعد الثالث
                colorOne = "#052976"; 
                colorTwo = "#052976"; 
                colorThree = "#052976"; 
                toggleColor = "1px solid #9EA4FF"; 
                break;
              case 3:
                spacing = ""; // العودة للوضع الطبيعي
                colorOne = "#9EA4FF"; 
                colorTwo = "#9EA4FF"; 
                colorThree = "#9EA4FF"; 
                toggleColor = ""; 
                break;
            }
        
            // تطبيق التباعد على جميع العناصر
            elements.forEach(element => {
              element.style.lineHeight = spacing;
            });
        
            // تطبيق الألوان على كل خطوة
            linesStepOne.style.backgroundColor = colorOne;
            linesStepTwo.style.backgroundColor = colorTwo;
            linesStepThree.style.backgroundColor = colorThree;
        
            // تغيير لون toggleLineheight
            toggleLineheight.style.border = toggleColor;
          };
        
          // تطبيق التباعد عند تحميل الصفحة استنادًا إلى البيانات المخزنة
          applyLineHeight();
        
          // عند الضغط على الزر، تغيير التباعد وحفظ الإعدادات في localStorage
          toggleLineheight.addEventListener('click', () => {
            lineHeightStep = (lineHeightStep + 1) % 4; // الانتقال إلى المرحلة التالية، وعند الوصول إلى 4 نعود للمرحلة 0
            localStorage.setItem('lineHeightStep', lineHeightStep); // حفظ الرقم الحالي في localStorage
            applyLineHeight(); // تطبيق التباعد الجديد
          });
        });
      
/*******************************محاذاه النص*********************************/ 

document.addEventListener('DOMContentLoaded', () => {
  let textAlignStep = parseInt(localStorage.getItem('textAlignStep')) || 0; // استرجاع الرقم الحالي للمحاذاة من localStorage
  const elements = document.querySelectorAll("*");
  const toggleTextAlign = document.getElementById('toggleTextAlign');
  const TextAlignStepOne = document.getElementById('TextAlignStepOne');
  const TextAlignStepTwo = document.getElementById('TextAlignStepTwo');
  const TextAlignStepThree = document.getElementById('TextAlignStepThree');

  // دالة لتطبيق المحاذاة
  const applyTextAlign = () => {
    let textAlign;
    let colorOne, colorTwo, colorThree, toggleColor;

    switch (textAlignStep) {
      case 0:
        textAlign = "start"; // المحاذاة لليسار
        colorOne = "#052976"; 
        colorTwo = "#9EA4FF"; 
        colorThree = "#9EA4FF"; 
        toggleColor = "1px solid #9EA4FF"; 
        break;
      case 1:
        textAlign = "center"; // المحاذاة للوسط
        colorOne = "#052976"; 
        colorTwo = "#052976"; 
        colorThree = "#9EA4FF"; 
        toggleColor = "1px solid #9EA4FF"; 
        break;
      case 2:
        textAlign = "end"; // المحاذاة لليمين
        colorOne = "#052976"; 
        colorTwo = "#052976"; 
        colorThree = "#052976"; 
        toggleColor = "1px solid #9EA4FF"; 
        break;
      case 3:
        textAlign = ""; // العودة للوضع الطبيعي
        colorOne = "#9EA4FF"; 
        colorTwo = "#9EA4FF"; 
        colorThree = "#9EA4FF"; 
        toggleColor = ""; 
        break;
    }

    // تطبيق المحاذاة على جميع العناصر
    elements.forEach(element => {
      element.style.textAlign = textAlign;
    });

    // تطبيق الألوان على كل خطوة
    TextAlignStepOne.style.backgroundColor = colorOne;
    TextAlignStepTwo.style.backgroundColor = colorTwo;
    TextAlignStepThree.style.backgroundColor = colorThree;

    // تغيير لون الزر
    toggleTextAlign.style.border = toggleColor;
  };

  // تطبيق المحاذاة عند تحميل الصفحة استنادًا إلى البيانات المخزنة
  applyTextAlign();

  // عند الضغط على الزر، تغيير المحاذاة وحفظ الإعدادات في localStorage
  toggleTextAlign.addEventListener('click', () => {
    textAlignStep = (textAlignStep + 1) % 4; // الانتقال إلى المرحلة التالية، وعند الوصول إلى 4 نعود للمرحلة 0
    localStorage.setItem('textAlignStep', textAlignStep); // حفظ الرقم الحالي في localStorage
    applyTextAlign(); // تطبيق المحاذاة الجديدة
  });
});


/**************************************اخفاء الصور************************************** */

const toggleButton = document.getElementById('toggleButton');
const featuresTextToggle = document.getElementById('featuresTextToggle');
const images = document.querySelectorAll('img');

// استرجاع حالة العرض/الإخفاء من localStorage
let isImagesHidden = localStorage.getItem('isImagesHidden') === 'true'; // إرجاع true إذا القيمة كانت 'true'

// تطبيق الحالة المحفوظة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
  images.forEach(image => {
    image.style.display = isImagesHidden ? 'none' : 'block';
    if (!isImagesHidden) {
      image.style.margin = 'auto';
    }
  });

  toggleButton.style.border = isImagesHidden ? "1px solid #9EA4FF" : "";
  featuresTextToggle.textContent = isImagesHidden ? 'عرض الصور' : 'إخفاء الصور';
});

// إضافة حدث النقر على الزر
toggleButton.addEventListener('click', function() {
  isImagesHidden = !isImagesHidden; // تبديل الحالة

  images.forEach(image => {
    image.style.display = isImagesHidden ? 'none' : 'block';
    if (!isImagesHidden) {
      image.style.margin = 'auto';
    }
  });

  toggleButton.style.border = isImagesHidden ? "1px solid #9EA4FF" : "";
  featuresTextToggle.textContent = isImagesHidden ? 'عرض الصور' : 'إخفاء الصور';

  // حفظ الحالة في localStorage
  localStorage.setItem('isImagesHidden', isImagesHidden);
});


/**************************************ابرز الروابط************************************** */

const toggleButtonLink = document.getElementById('toggleLink');
const featuresText = document.getElementById('featuresText');
const links = document.querySelectorAll('a,.nav-link');
let colorHex = "#9EA4FF";

// استعادة الحالة من localStorage عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  const highlightState = localStorage.getItem('highlightState') === 'true'; // تحويل النص إلى قيمة منطقية
  if (highlightState) {
    links.forEach(link => {
      link.classList.add('highlight'); // إضافة الكلاس إذا كان مخزناً
    });
    toggleButtonLink.style.border = "1px solid #9EA4FF";
    featuresText.style.color = "#9EA4FF";
  }
});

// إضافة/إزالة الكلاس وتحديث localStorage عند النقر على الزر
toggleButtonLink.addEventListener('click', function () {
  const isHighlighted = links[0].classList.contains('highlight'); // التحقق من الحالة الحالية

  links.forEach(link => {
    if (isHighlighted) {
      link.classList.remove('highlight'); // إزالة الكلاس
      link.style.color = ''; // إعادة اللون الافتراضي
    } else {
      link.classList.add('highlight'); // إضافة الكلاس
    }
  });

  // تحديث حالة الزر والنص بناءً على الحالة
  if (isHighlighted) {
    toggleButtonLink.style.border = "none";
    featuresText.style.color = "";
    localStorage.setItem('highlightState', 'false'); // حفظ الحالة
  } else {
    toggleButtonLink.style.border = "1px solid #9EA4FF";
    featuresText.style.color = "#9EA4FF";
    localStorage.setItem('highlightState', 'true'); // حفظ الحالة
  }
});

/************************************************حجم النص********************************************* */

let clickCount = parseInt(localStorage.getItem('fontSizeClickCount')) || 0; // استرجاع عدد النقرات
const increaseFontSize = document.getElementById('increaseFontBtn');

// مصفوفة الألوان للخطوات
const stepColors = ['#052976', '#9EA4FF']; // ألوان مختلفة لكل خطوة
const fontSizeStepOne = document.getElementById('fontSizeStepOne');
const fontSizeStepTwo = document.getElementById('fontSizeStepTwo');
const fontSizeStepThree = document.getElementById('fontSizeStepThree');

// تطبيق الحالة المحفوظة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  const allElements = document.querySelectorAll('*');

  // استرجاع عدد النقرات وتطبيق التغييرات
  if (clickCount > 0) {
    increaseFontSize.style.border = "1px solid #9EA4FF";
    allElements.forEach(element => {
      const currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
      element.style.fontSize = (currentFontSize + clickCount) + 'px';
    });

    // استرجاع الألوان بناءً على عدد النقرات
    if (clickCount === 1) {
      fontSizeStepOne.style.backgroundColor = stepColors[0];
      fontSizeStepTwo.style.backgroundColor = stepColors[1];
      fontSizeStepThree.style.backgroundColor = stepColors[1];
    } else if (clickCount === 2) {
      fontSizeStepOne.style.backgroundColor = stepColors[0];
      fontSizeStepTwo.style.backgroundColor = stepColors[0];
      fontSizeStepThree.style.backgroundColor = stepColors[1];
    } else if (clickCount === 3) {
      fontSizeStepOne.style.backgroundColor = stepColors[0];
      fontSizeStepTwo.style.backgroundColor = stepColors[0];
      fontSizeStepThree.style.backgroundColor = stepColors[0];
    }
  }
});

// إضافة حدث النقر على الزر
increaseFontSize.addEventListener('click', function () {
  clickCount++;
  const allElements = document.querySelectorAll('*');

  if (clickCount <= 3) {
    increaseFontSize.style.border = "1px solid #9EA4FF";
    // زيادة حجم الخط
    allElements.forEach(element => {
      const currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
      element.style.fontSize = (currentFontSize + 1) + 'px';
    });

    // تغيير لون خلفية العناصر المحددة بناءً على عدد الضغطات
    if (clickCount === 1) {
      fontSizeStepOne.style.backgroundColor = stepColors[0];
      fontSizeStepTwo.style.backgroundColor = stepColors[1];
      fontSizeStepThree.style.backgroundColor = stepColors[1];
    } else if (clickCount === 2) {
      fontSizeStepOne.style.backgroundColor = stepColors[0];
      fontSizeStepTwo.style.backgroundColor = stepColors[0];
      fontSizeStepThree.style.backgroundColor = stepColors[1];
    } else if (clickCount === 3) {
      fontSizeStepOne.style.backgroundColor = stepColors[0];
      fontSizeStepTwo.style.backgroundColor = stepColors[0];
      fontSizeStepThree.style.backgroundColor = stepColors[0];
    }

    // حفظ عدد النقرات في localStorage
    localStorage.setItem('fontSizeClickCount', clickCount);

  } else if (clickCount === 4) {
    increaseFontSize.style.border = "";
    // إعادة حجم الخط إلى الافتراضي
    allElements.forEach(element => {
      element.style.fontSize = '';
    });

    // إعادة ألوان الخلفيات إلى الوضع الافتراضي
    fontSizeStepOne.style.backgroundColor = '';
    fontSizeStepTwo.style.backgroundColor = '';
    fontSizeStepThree.style.backgroundColor = '';

    // إعادة عدد الضغطات إلى الصفر
    clickCount = 0;
    localStorage.setItem('fontSizeClickCount', clickCount); // حفظ الحالة الافتراضية
  }
});

/*************************************************تغيير شكل المؤشر في كل الصفحة******************************************/

 // استهداف الزر
 const changeCursorBtn = document.getElementById('changeCursorBtn');
        
 // إضافة حدث عند الضغط على الزر
 changeCursorBtn.addEventListener('click', () => {
     // تغيير شكل المؤشر في كل الصفحة
     document.body.classList.toggle('custom-cursor');
    // تغيير لون الخلفية للزرار عند التفعيل
    changeCursorBtn.classList.toggle('cursorBtnActive');
 });





/************************************************resetButton*******************************************/

// document.addEventListener('DOMContentLoaded', () => {
//   const resetButton = document.getElementById('resetButton');
//   // const body = document.body;
//   const html = document.documentElement;

//   resetButton.addEventListener('click', () => {
//     // مسح جميع الفئات المضافة إلى body
//     html.className = '';

//     // تعيين الوضع الافتراضي إلى Light Mode
//     html.classList.add('light-mode');
//     localStorage.setItem('themeMode', 'light-mode'); // تخزين القيمة في localStorage

//     // إعادة تعيين الأنماط المخصصة
//     document.documentElement.style = '';
//     document.documentElement.style.border = '';
//     document.documentElement.style.backgroundColor = '';
//     document.documentElement.style.fontSize = ''; // إعادة الخط للوضع الافتراضي
//     toggleButtonLink.style.border = "";
//     toggleInvertMode.style.border = "";
//     toggleButton.style.border = "";
//     increaseFontSize.style.border = "";
//     // تغيير لون toggleLetterSpacing

//     // إعادة الخط الافتراضي للصفحة
//     html.style.fontSize = ''; // استعادة حجم الخط الأساسي للـ body


//     // إظهار جميع الصور
//     document.querySelectorAll('img').forEach(img => img.style.display = 'block');

//     // إزالة أي تمييز من الروابط
//     document.querySelectorAll('a,.nav-link').forEach(link => {
//       link.classList.remove('highlight');
//        link.style.border = '';
//        link.style.backgroundColor = '';
//        featuresText.style.color = "";
//      });

//          // إعادة حجم الخط إلى الافتراضي
//          document.querySelectorAll("*").forEach(element => {
//         element.style.fontSize = '';
//     });
//         // إعادة ألوان الخلفيات إلى الوضع الافتراضي
//         fontSizeStepOne.style.backgroundColor = '';
//         fontSizeStepTwo.style.backgroundColor = '';
//         fontSizeStepThree.style.backgroundColor = '';


//         document.body.classList.remove('custom-cursor');
//         changeCursorBtn.classList.remove('cursorBtnActive');

//     // مسح الإعدادات المخزنة في localStorage
//     localStorage.clear();

//         // إعادة تخزين الوضع الافتراضي في LocalStorage
//         localStorage.setItem('themeMode', 'light-mode');
//   });
//     // عند تحميل الصفحة، التحقق من إعدادات الوضع الافتراضي
//     const savedThemeMode = localStorage.getItem('themeMode');
//     if (savedThemeMode) {
//       html.className = savedThemeMode;
//     } else {
//       html.classList.add('light-mode'); // إذا لم يتم العثور على إعداد، تعيين الوضع الافتراضي إلى Light Mode
//       localStorage.setItem('themeMode', 'light-mode');
//     }
// });


/************************************************************************************************/ 

// var headingNavbar=document.querySelectorAll(".navbar");
// const header = document.querySelector('nav');

// window.addEventListener("scroll" ,function(e){
//   if (window.scrollY > 300) {
//     header.classList.add("scrolled");
//   } else {
//     header.classList.remove("scrolled");
//   }

//   // console.log(window.scrollY)
// })

// chatbot








// swipper




// var swiper = new Swiper("#mySwiper", {
//   //   autoplay: {
//   //   delay: 4000,
//   //   disableOnInteraction: false, // Continue autoplay even after user interactions
//   // },
//   // // loop:true,
//   // centeredSlides:true,
//   // // centerInsufficientSlides:true,
//   // // centeredSlidesBounds:true,
//   // slidesPerView: 3,
//   // spaceBetween: 20,
//   // pagination: {
//   //   el: ".swiper-pagination",
//   //   clickable: true,
//   // },
// // 
// slidesPerView: 3, // Show exactly 3 slides
// spaceBetween: 20, // Space between slides
// centeredSlides: true, // Keep the active slide in the center
// loop: true, // Loop through the slides
// initialSlide: 3,
// pagination: {
//   el: '.swiper-pagination',
//   clickable: true,
// },
// });



  // 


  var swiper = new Swiper("#mySwiper", {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false, // Continue autoplay even after user interactions
    },
    loop:true,
    centeredSlides:true,
    initialSlide: 3,
    slidesPerView: 3,
    centerInsufficientSlides:true,
    centeredSlidesBounds:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
  
          
          
           
          },
    });


var swiper = new Swiper("#mySwiperLastNews", {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false, // Continue autoplay even after user interactions
  },
  loop:true,
  centeredSlides:true,
  initialSlide: 3,
  slidesPerView: 3,
  centerInsufficientSlides:true,
  centeredSlidesBounds:true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

        
        
         
        },
  });


  var swiper = new Swiper("#mySwiperLastHero", {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false, // Continue autoplay even after user interactions
    },
    loop:true,
    centeredSlides:true,
    // centeredSlidesBounds:true,
   // slidesPerGroup: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView:1,
          spaceBetween: 20,
        }
          
          
           
          },
    });




// var swiper = new Swiper("#swiperHero", {
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false, // Continue autoplay even after user interactions
//   },
//   slidesPerView:1,
//   slidesPerGroup:1,
//   loop:true,
//   centeredSlides:true,
//   pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//     640: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 0.5,
//       spaceBetween: 20,
//     },
//     1024: {
//       slidesPerView: 0.5,
//       spaceBetween: 20,
//     }
      
//       },
//   });






    // chat-bot

    function openDialogue(dialogue, dialogueHeight) {
    let div = document.getElementById(dialogue);
    console.log(div.style.bottom, dialogueHeight);
    if(div.style.bottom == '' || div.style.bottom == dialogueHeight) {
      div.style.bottom = '0px'
    }else {
      div.style.bottom = dialogueHeight;
    }
  } 
  
  function minimizeDialogue(dialogue, dialogueHeight) {
    let div = document.getElementById(dialogue);
    let minimize = document.getElementById('minimize'+ dialogue);
    let maximize = document.getElementById('maximize' + dialogue);
    console.log(maximize);
    console.log(minimize);
    if(div.style.bottom == '0px') {
      div.style.bottom = dialogueHeight;
      minimize.style.display = 'none';
      maximize.style.display = 'block';
    }
    else {
      div.style.bottom = '0px';
      minimize.style.display = 'block';
      maximize.style.display = 'none';
    }
  }
  
  function  hideDialougue(dialogue, dialogueHeight) {
      let div = document.getElementById(dialogue);
      if(div) {
        // div.style.display = 'none'
        div.style.bottom = dialogueHeight;
      }
  }
  document.getElementById('post1Details').style.display = 'flex';
  document.getElementById('post2Details').style.display = 'none';
  document.getElementById('post3Details').style.display = 'none';
  document.getElementById('post4Details').style.display = 'none';

function reviewPost(postDivId){
  let selsctedId = postDivId;
  switch(selsctedId){
    case 'post1':
      document.getElementById('post1Details').style.display = 'flex';
      document.getElementById('post2Details').style.display = 'none';
      document.getElementById('post3Details').style.display = 'none';
      document.getElementById('post4Details').style.display = 'none';
      break;
    case 'post2':
      document.getElementById('post1Details').style.display = 'none';
      document.getElementById('post2Details').style.display = 'flex';
      document.getElementById('post3Details').style.display = 'none';
      document.getElementById('post4Details').style.display = 'none';
      break;
    case 'post3':
      document.getElementById('post1Details').style.display = 'none';
      document.getElementById('post2Details').style.display = 'none';
      document.getElementById('post3Details').style.display = 'flex';
      document.getElementById('post4Details').style.display = 'none';
      break;
  }
}


function openmenu(){
  let sidebar = document.getElementById("sidebar");
  
  let fixed_btn = document.getElementById("fixed-btn");
  let btn_sidebar_toggle = document.getElementById("btn_sidebar_toggle");
  let menu_labels = document.querySelectorAll(".sidebar .menu a span");
  
 
      // Code for shrinking
      sidebar.classList.toggle("isShrinked");
      fixed_btn.classList.toggle("isShow");

  
  }
  



