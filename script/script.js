			function moonafic(){
				randomQuote();
			}
			function debug(){
				console.log('debug');
			}

			var txt = 'Halo simp ku sayang';
			var txt2 = 'txt';

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

			const quotes = [
			    {
					"quote": "Yaudah daripada kalian depresi kalian nge si(m)p in aku aja",
					"source": "Live Mama Moona"
				  },
				  {
					"quote": "Bukan Moonaroh",
					"source": "Live Perkenalan"
				  },
				  {
					"quote": "Jelek zombie jelek",
					"source": "Moona Hoshinova"
				  },
				 {
					"quote": "Moona Suka Melon",
					"source": "Moona Hoshinova"
				  },
				{
					"quote": "Ohh.. Melon Yang itu,..",
					"source": "Moona Hoshinova"
				  },
			]
			setInterval(randomQuote, 6000);
			function randomQuote(){
			  let random = quotes[Math.floor(Math.random() * quotes.length)];
			  quotation.innerText = `"${random.quote}"`;
			  source.innerText = random.source;
			}

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
		
