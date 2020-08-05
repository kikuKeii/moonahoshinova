function moonafic(){
				randomQuote();
			}
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
				{
					"quote": "My room full of foods. My stomach full of foods. And I feel sleepy again. My oh my"
					"source": "Moona Hosinova 05/08/2020"
				}
			]
			setInterval(randomQuote, 6000);
			function randomQuote(){
			  let random = quotes[Math.floor(Math.random() * quotes.length)];
			  quotation.innerText = `"${random.quote}"`;
			  source.innerText = random.source;
			}
