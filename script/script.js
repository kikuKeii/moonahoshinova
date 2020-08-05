                        function debug(){
				console.log('debug');
			}

			var txt = 'teks';
			var txt2 = 'teks';

			function checkTime(i) {
				if (i < 10) {
						i = "0" + i;
					}
				return i;
				}
			var H;
			var M;
			var S;
			var starting=true;
			function startTime() {
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();

				H=h;
				M=m;
				S=s;

				if (H<5){
					txt='Have a Good Night';
					if(txt != txt2 && !starting)
						document.getElementById("quote").innerHTML = txt;
					txt2=txt;
				}
				else if(H<9){
					txt='Selamat Pagi Moona ku <3';
					if(txt != txt2 && !starting)
						document.getElementById("quote").innerHTML = txt;
					txt2=txt;
				}
				else if(H<12){
					txt='Be Happy Today';
					if(txt != txt2 && !starting)
						document.getElementById("quote").innerHTML = txt;
					txt2=txt;
				}
				else if(H<16){
					txt='Selamat Sore Moona >_<';
					if(txt != txt2 && !starting)
						document.getElementById("quote").innerHTML = txt;
					txt2=txt;
				}
				else if(H<19){
					txt='Sore, Kamu sudah istirahat ?';
					if(txt != txt2 && !starting)
						document.getElementById("quote").innerHTML = txt;
					txt2=txt;
				}
				else if(H<23){
					txt='Good Evening Sweetie <3';
					if(txt != txt2 && !starting)
						document.getElementById("quote").innerHTML = txt;
					txt2=txt;
				}
				else if(H<=24){
					txt='Waktunya tidur, Good Night';
					if(txt != txt2 && !starting)
						document.getElementById("quote").innerHTML = txt;
					txt2=txt;
				}
				starting=false;

				m = checkTime(m);
				s = checkTime(s);
				document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
				t = setTimeout(function() {
				startTime()
				}, 500);
			}
			startTime();

			var i = 0;
			var speed = 50;
			
			function typeWriter() {
				if (i < txt.length) {
					var o = (i/txt.length*2);
					var o = o.toFixed(0);
					var o2 = o-1;
					if (o2<0)
						o2=0;
					var o3 = String(o);
					var p = "translate(-50%,50%) scale("+o2+")";
					document.getElementById("quote").innerHTML += txt.charAt(i);
					i++;
					$(".jam").css("opacity",o3);
					$(".bulat").css("transform",p).css("opacity",o2);
					setTimeout(typeWriter, speed);
				}
			}
			typeWriter();
		
