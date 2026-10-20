window.GIFT_CONFIG={
 friendName:'Đủn',selfPronoun:'tôi',friendPronoun:'bà',ui:{showPageLabel:true,showWishLines:false,showEqualizer:false},title:'HAPPY 20/10',subTitle:'Đủn',
 landingTitle:'{friendName} ơi, {selfPronoun} có quà cho {friendPronoun} nè!',landingKicker:'Tối nay sân khấu này thuộc về {friendName}',chargeLabel:'GIỮ ĐỂ NẠP PHÁO',quickStart:'Bấm nhanh ✦',chargeHint:'Giữ lâu hơn nữa!',
 autoAdvance:true,autoAdvanceMs:8200,
 wishPages:[
  {id:'bùng-nổ',label:'TRANG 1',headline:'BÙNG NỔ!',theme:{background:'#0c2c84',accent:'#4cc9f0',secondary:'#ffd166',particles:['#1e6bff','#4cc9f0','#ffffff','#ffd166']},fx:'burst',sound:'boom'},
  {id:'cháy',label:'TRANG 2',headline:'CHÁY!',theme:{background:'#76230e',accent:'#ff713b',secondary:'#ffd166',particles:['#ff3b22','#ff713b','#ffb347','#ffe27a']},fx:'fire',sound:'fire'},
  {id:'hoành-tráng',label:'TRANG 3',headline:'HOÀNH TRÁNG!',theme:{background:'#32134d',accent:'#ffd166',secondary:'#9d174d',particles:['#ffd166','#fff1a8','#9d174d','#c084fc']},fx:'grand',sound:'fanfare'}, // TODO thay câu chụp ảnh bằng kỷ niệm thật nếu muốn
  {id:'hào-quang',label:'TRANG 4',headline:'HÀO QUANG!',theme:{background:'#183b61',accent:'#fff7dc',secondary:'#bde0fe',particles:['#fff7dc','#ffd166','#bde0fe','#ffffff']},fx:'halo',sound:'chime'},
  {id:'sớm-có-ny',label:'TRANG 5',headline:'SỚM CÓ NY =))',theme:{background:'#57134f',accent:'#ff4dba',secondary:'#c4a1ff',particles:['#ff4dba','#ff91d2','#c4a1ff','#ffffff']},fx:'hearts',sound:'pop'} // TODO thay câu bài diễn văn bằng inside joke của hai người
 ],
 signature:'Từ spiderman',
 music:{volume:.8,duckTo:.15,autoNext:true,fallbackLabel:'Không tải được nhạc, đang dùng nhạc dự phòng',tracks:[
  {id:'beauty-and-a-beat',title:'Beauty And A Beat',artist:'Justin Bieber',src:encodeURI('assets/music/beauty-and-a-beat.mp3'),startAt:54, // chorus/drop; chỉnh theo bản nhạc bạn có
   bpm:128,gain:1,cover:['#ff4d8d','#4cc9f0']}
 ]},
 video:{src:encodeURI('assets/video/dun-dance.mp4'),sources:[{src:encodeURI('assets/video/dun-dance.mp4'),type:'video/mp4'}],poster:'',title:'Màn trình diễn của Đủn',caption:'Xin dành một tràng pháo tay thật lớn cho nhân vật chính ✨'},
 text:{skip:'Bỏ qua lời chúc',videoButton:'MỞ MÀN TRÌNH DIỄN CỦA ĐỦN',picker:'Chọn nhạc cho đêm nay',finaleTitle:'HAPPY 20/10 ĐỦN',playHint:'Chạm vào bất kỳ đâu để bắn thêm pháo',replay:'Xem lại từ đầu',replayVideo:'Xem lại video',changeTrack:'Đổi bài',loading:'Đang nạp năng lượng…',shortCharge:'Giữ thêm một chút nha!',reduced:'Chế độ giảm chuyển động đang bật',wishPrev:'Trước',wishNext:'Tiếp',wishSkip:'Bỏ qua',wishProgress:'Trang {current} trên {total}',videoMissing:'Chưa tìm thấy file video',videoHelp:'Đủn sắp xuất hiện trên sân khấu — trong lúc chờ, mình cùng ngắm pháo hoa nhé!',videoPlay:'Phát video',videoReplay:'Xem lại',audioTap:'Chạm để bật nhạc',audioFallback:'Không tải được nhạc, đang dùng nhạc dự phòng',videoUnsupported:'Video này chưa phát được trên trình duyệt, cần chuyển sang MP4 H.264',openVideo:'Mở video trong tab mới'},
 chargeDuration:1450,fireworks:{quality:1,finaleMs:8000}
};



