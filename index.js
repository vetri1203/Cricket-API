import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

const data = {
  players: [
    {
      "name": "Virat Kohli",
      "img": `https://www.cricbuzz.com/a/img/v1/152x152/i1/c332891/virat-kohli.jpg`,
      "age": 34,
      "country": "India",
      "place": "Delhi",
      "role": "Batsman",
      "match-played":511,
      "runs":26026,
    },
    {
        "name":"Rohit Sharma",
        "img":`https://www.cricbuzz.com/a/img/v1/152x152/i1/c352478/rohit-sharma.jpg`,
        "age":36,
        "country": "India",
        "place":"Nagpur, Maharashtra",
        "role":"Batsman",
        "match-played":455,
        "runs":17907,
    },
    {
        "name":"Shikhar Dhawan",
        "img":`https://www.cricbuzz.com/a/img/v1/152x152/i1/c170660/shikhar-dhawan.jpg`,
        "age":37,
        "country": "India",
        "place":"Delhi",
        "role":"Batsman",
        "match-played":269,
        "runs":10867,
    },
    {
        "name":"Shubman Gill",
        "img":`https://www.cricbuzz.com/a/img/v1/152x152/i1/c352479/shubman-gill.jpg`,
        "age":24,
        "country": "India",
        "place":"Firozpur, Punjab",
        "role":"Batsman",
        "match-played":66,
        "runs":3256,
    },
    {
        "name":"Shreyas Iyer",
        "img":`https://www.cricbuzz.com/a/img/v1/152x152/i1/c352480/shreyas-iyer.jpg`,
        "age":29,
        "country": "India",
        "place":"Mumbai",
        "role":"Batsman",
        "match-played":110,
        "runs":3607,
    },
    {
        "name":"Rishabh Pant",
        "img":`https://www.cricbuzz.com/a/img/v1/152x152/i1/c244978/rishabh-pant.jpg`,
        "age":26,
        "country": "India",
        "place":"Haridwar, Uttarakhand",
        "role":"WK-Batsman",
        "match-played":129,
        "runs":4123,
    },
    {
        "name":"KL Rahul",
        "img":`https://www.cricbuzz.com/a/img/v1/152x152/i1/c352485/kl-rahul.jpg`,
        "age":31,
        "country": "India",
        "place":"Mangaluru, Karnataka",
        "role":"WK-Batsman",
        "match-played":184,
        "runs":7348,
    },
    {
        "name":"Sanju Samson",
        "img":`https://www.cricbuzz.com/a/img/v1/152x152/i1/c226289/sanju-samson.jpg`,
        "age":28,
        "country": "India",
        "place":"Pulluvila, Vizhinjam, Trivandrum",
        "role":"WK-Batsman",
        "match-played":37,
        "runs":764,
    },
    {
        "name":"Hardik Pandya",
        "img":`https://www.cricbuzz.com/a/img/v1/152x152/i1/c352482/hardik-pandya.jpg`,
        "age":30,
        "country": "India",
        "place":"Choryasi, Gujarat",
        "role":"Batting Allrounder",
        "match-played":189,
        "runs":3649,
    },
    {
        "name":"Ravindra Jadeja",
        "img":`https://www.cricbuzz.com/a/img/v1/152x152/i1/c352483/ravindra-jadeja.jpg`,
        "age":34,
        "country": "India",
        "place":"Navagam-Khed, Saurashtra",
        "role":"Bowling Allrounder",
        "match-played":321,
        "runs":5897,
    },
    {
        "name":"Ravichandran Ashwin",
        "img":`https://www.cricbuzz.com/a/img/v1/152x152/i1/c352484/ravichandran-ashwin.jpg`,
        "age":37,
        "country": "India",
        "place":"Chennai, Tamil Nadu",
        "role":"Bowling Allrounder",
        "match-played":275,
        "runs":4076,
    },
    {
        "name":"Prithvi Shaw",
        "img":`https://www.cricbuzz.com/a/img/v1/152x152/i1/c171030/prithvi-shaw.jpg`,
        "age":23,
        "country": "India",
        "place":"Thane, Maharashtra",
        "role":"Batsman",
        "match-played":12,
        "runs":528,
    },
    {
        "name":"Mohammed Shami",
        "img":`https://www.cricbuzz.com/a/img/v1/152x152/i1/c352489/mohammed-shami.jpg`,
        "age":33,
        "country": "India",
        "place":"Amroha, Uttar Pradesh",
        "role":"Bowler",
        "match-played":181,
        "runs":"",
        "wickets":424,
    },
    {
        "name":"Jasprit Bumrah",
        "img":`https://www.cricbuzz.com/a/img/v1/152x152/i1/c352488/jasprit-bumrah.jpg`,
        "age":29,
        "country": "India",
        "place":"Ahmedabad",
        "role":"Bowler",
        "match-played":174,
        "runs":"",
        "wickets":341,
    },
    {
        "name":"Kuldeep Yadav",
        "img":`https://www.cricbuzz.com/a/img/v1/152x152/i1/c352490/kuldeep-yadav.jpg`,
        "age":28,
        "country": "India",
        "place":"Kanpur, Uttar Pradesh",
        "role":"Bowler",
        "match-played":134,
        "runs":"",
        "wickets":244,
    },
    {
        "name":"Yuzvendra Chahal",
        "img":`https://www.cricbuzz.com/a/img/v1/152x152/i1/c244981/yuzvendra-chahal.jpg`,
        "age":33,
        "country": "India",
        "place":"Jind, Haryana",
        "role":"Bowler",
        "match-played":152,
        "runs":"",
        "wickets":217,
    },
    {
        "name":"Navdeep Saini",
        "img":`https://www.cricbuzz.com/a/img/v1/152x152/i1/c226400/navdeep-saini.jpg`,
        "age":30,
        "country": "India",
        "place":"Karnal, Haryana",
        "role":"Bowler",
        "match-played":21,
        "runs":"",
        "wickets":23,
    },
    {
        "name":"Shardul Thakur",
        "img":`https://www.cricbuzz.com/a/img/v1/152x152/i1/c352487/shardul-thakur.jpg`,
        "age":32,
        "country": "India",
        "place":"Palghar, Maharashtra",
        "role":"Bowler",
        "match-played":82,
        "runs":703,
        "wickets":128,
    }, {
        "name":"Umesh Yadav",
        "img":`https://www.cricbuzz.com/a/img/v1/152x152/i1/c332901/umesh-yadav.jpg`,
        "age":35,
        "country": "India",
        "place":"Nagpur, Maharashtra",
        "role":"Bowler",
        "match-played":141,
        "runs":"",
        "wickets":288
    }, {
        "name":"Mohammed Siraj",
        "img":`https://www.cricbuzz.com/a/img/v1/152x152/i1/c352491/mohammed-siraj.jpg`,
        "age":29,
        "country": "India",
        "place":"Hyderabad",
        "role":"Bowler",
        "match-played":63,
        "runs":"",
        "wickets":129
    }, {
        "name":"Ishan Kishan",
        "img":`https://www.cricbuzz.com/a/img/v1/152x152/i1/c352492/ishan-kishan.jpg`,
        "age":25,
        "country": "India",
        "place":"Patna, Bihar",
        "role":"WK-Batsman",
        "match-played":58,
        "runs":1697,
    }, {
        "name":"Suryakumar Yadav",
        "img":`https://www.cricbuzz.com/a/img/v1/152x152/i1/c352481/suryakumar-yadav.jpg`,
        "age":33,
        "country": "India",
        "place":"Mumbai, Maharashtra",
        "role":"Batsman",
        "match-played":84,
        "runs":2516,
    }, {
        "name":"Rahul Dravid",
        "img":`https://www.cricbuzz.com/a/img/v1/152x152/i1/c156286/rahul-dravid.jpg`,
        "age":50,
        "country": "India",
        "place":"Indore, Madhya Pradesh",
        "role":"Batsman",
        "match-played":509,
        "runs":24208, 
    },
  ],
};

app.get('/', (req, res) => {
    res.json(data);
    // res.send("ok")
});


app.listen(8010,(err)=>{
    if(err)
    {
        console.log("err");
    }
    else{
        console.log("app runing");
    }
});