const initialState  = [
    {
      cat: 1,
      icon: require('../images/fraud_prevention.png'),
      catCourses:[
        {
          id:1,
          name: 'Intensification of money Laundering prevention-private customer advice',
          duration: 30,
          progress: 3,
          end: 'March 14, 2024',
        },
        {
          id:2,
          name: ' Basic Training - Preventation of Money Laundering and Terrorist Financing(V3.0)',
          duration: 44,
          progress: 0,
          end: '-',
        },
        {
          id:3,
          name: ' Advanced Training - Preventation of Money Laundering and Terrorist Financing(V3.0)',
          duration: 22,
          progress: 0,
          end: '-',
        }
      ]
    } ,
    {
      cat: 2,
      icon: require('../images/it_security.png'),
      catCourses:[
        {
          id:4,
          name: 'IT Security Basics(V1.01.3)',
          duration: 40,
          progress: 0,
          end: 'March 14, 2024',
        },
        {
          id:5,
          name: 'Basic training It security and information security (V1.0)',
          duration: 60,
          progress: 3,
          end: '-',
        },
        {
          id:6,
          name: ' Advanced training It security and information security (V1.1)',
          duration: 29,
          progress: 0,
          end: '-',
        }
      ]
     },
     {
      cat: 3,
      icon: require('../images/data_protection.png'),
      catCourses:[
        {
          id:7,
          name: 'Basic training data protection (V2.0)',
          duration: 0,
          progress: 0,
          end: '-',
        },
        {
          id:8,
          name: 'Privacy basics (V1.00.2)',
          duration: 40,
          progress: 0,
          end: '-',
        },
        {
          id:9,
          name: 'In-depth training on data protection (V1.0)',
          duration: 51,
          progress: 0,
          end: '-',
        },
        {
          id:10,
          name: 'Privacy basics 1.0',
          duration: 401,
          progress: 3,
          end: '-',
        }
      ]
     },
     {
      cat: 4,
      icon: require('../images/wphg.png'),
      catCourses:[
        {
          id:11,
          name: 'WpHG Compliance basics (V1.00.3)',
          duration: 30,
          progress: 0,
          end: '-',
        },
        {
          id:12,
          name: 'In-depth WpHG - sales Representative (V1.00.2)',
          duration: 30,
          progress: 0,
          end: '-',
        },
      ]
     },
  ];
  
  
  // Return data to store.js file
  const courseReducer = (state = initialState , action) => {
    return state
  }
  
  export default courseReducer