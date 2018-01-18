const express = require('express')
const router = express();
const axios = require('axios');


router.get('/getDiscList', (req, res) => {
  var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg';
  axios.get(url, {
    headers: {
      referer: 'https://c.y.qq.com',
      host: 'c.y.qq.com'
    },
    params: req.query,
  }).then((response) => {
    res.json(response.data);
  }).catch((e) => {
    console.log(e);
  })
})

router.get('/getPlayList', (req, res) => {
  var url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg';
  // var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg';
  axios.get(url, {
    headers: {
      referer: 'https://c.y.qq.com',
      host: 'c.y.qq.com'
      // 'Remote Address': '59.37.96.220:443',
      // 'Referrer Policy': 'no-referrer-when-downgrade',
    },
    params: req.query,
  }).then((response) => {
    res.json(response.data);
  }).catch((e) => {
    console.log(e);
  })
})

router.get('/lyric', (req, res) => {
  var url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg';
  axios.get(url, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com',
    },
    params: req.query,
  })
  .then((response) => {
    var ret = response.data;
    if (typeof ret === 'string') {
      var reg = /^\w+\(({[^()]+})\)$/;
      var matches = ret.match(reg);
      if (matches) {
        ret = JSON.parse(matches[1]);
      }
    }
    res.json(ret);
  })
  .catch((e) => {
    console.log(e);
  });
});


router.get("/getmusicBasis", (req, res) => {
  var url = "https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg";
  axios
    .get(url, {
      headers: {
        referer: "https://c.y.qq.com",
        host: "c.y.qq.com"
      },
      params: req.query
    })
    .then(response => {
      res.json(response.data);
    })
    .catch(e => {
      console.log(e);
    });
});


module.exports = router
