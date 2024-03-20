export const mockSearchResults = {
	count: 4,
	result: [
		{
			description: 'APPLE INC',
			displaySymbol: 'AAPL',
			symbol: 'AAPL',
			type: 'Common Stock',
		},
		{
			description: 'APPLE INC',
			displaySymbol: 'AAPL.SW',
			symbol: 'AAPL.SW',
			type: 'Common Stock',
		},
		{
			description: 'APPLE INC',
			displaySymbol: 'APC.BE',
			symbol: 'APC.BE',
			type: 'Common Stock',
		},
		{
			description: 'APPLE INC',
			displaySymbol: 'APC.DE',
			symbol: 'APC.DE',
			type: 'Common Stock',
		},
	],
};

export const mockCompanyDetails = {
	country: 'US',
	currency: 'USD',
	exchange: 'NASDAQ/NMS (GLOBAL MARKET)',
	ipo: '1980-12-12',
	marketCapitalization: 1415993,
	name: 'Apple Inc',
	phone: '14089961010',
	shareOutstanding: 4375.47998046875,
	ticker: 'AAPL',
	weburl: 'https://www.apple.com/',
	logo: 'https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png',
	finnhubIndustry: 'Technology',
};

export const mockStockQuote = {
	c: 261.74,
	h: 263.31,
	l: 260.68,
	o: 261.07,
	pc: 259.45,
	t: 1582641000,
};

export const mockHistoricalData = {
	c: [217.68, 221.03, 219.89],
	h: [222.49, 221.5, 220.94],
	l: [217.19, 217.1402, 218.83],
	o: [221.03, 218.55, 220],
	s: 'ok',
	t: [1569297600, 1569384000, 1569470400],
	v: [33463820, 24018876, 20730608],
};

export const mockDailyChartEOD = {
	symbol: 'AAPL',
	historical: [
		{
			date: '2023-10-06',
			open: 173.8,
			high: 176.61,
			low: 173.18,
			close: 176.53,
			adjClose: 176.53,
			volume: 21712747,
			unadjustedVolume: 21712747,
			change: 2.73,
			changePercent: 1.57077,
			vwap: 175.44,
			label: 'October 06, 23',
			changeOverTime: 0.0157077,
		},
		{
			date: '2023-10-05',
			open: 173.79,
			high: 175.45,
			low: 172.68,
			close: 174.91,
			adjClose: 174.91,
			volume: 48251046,
			unadjustedVolume: 47369743,
			change: 1.12,
			changePercent: 0.64446,
			vwap: 174.23,
			label: 'October 05, 23',
			changeOverTime: 0.0064446,
		},
	],
};

export const mockCompanyOutlook = {
	profile: {
		symbol: 'AAPL',
		price: 173.66,
		beta: 1.286802,
		volAvg: 58221571,
		mktCap: 2715035094200,
		lastDiv: 0.96,
		range: '124.17-198.23',
		changes: 1.26,
		companyName: 'Apple Inc.',
		currency: 'USD',
		cik: '0000320193',
		isin: 'US0378331005',
		cusip: '037833100',
		exchange: 'NASDAQ Global Select',
		exchangeShortName: 'NASDAQ',
		industry: 'Consumer Electronics',
		website: 'https://www.apple.com',
		description:
			'Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services. In addition, the company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; AirPods Max, an over-ear wireless headphone; and wearables, home, and accessories comprising AirPods, Apple TV, Apple Watch, Beats products, HomePod, and iPod touch. Further, it provides AppleCare support services; cloud services store services; and operates various platforms, including the App Store that allow customers to discover and download applications and digital content, such as books, music, video, games, and podcasts. Additionally, the company offers various services, such as Apple Arcade, a game subscription service; Apple Music, which offers users a curated listening experience with on-demand radio stations; Apple News+, a subscription news and magazine service; Apple TV+, which offers exclusive original content; Apple Card, a co-branded credit card; and Apple Pay, a cashless payment service, as well as licenses its intellectual property. The company serves consumers, and small and mid-sized businesses; and the education, enterprise, and government markets. It distributes third-party applications for its products through the App Store. The company also sells its products through its retail and online stores, and direct sales force; and third-party cellular network carriers, wholesalers, retailers, and resellers. Apple Inc. was incorporated in 1977 and is headquartered in Cupertino, California.',
		ceo: 'Mr. Timothy D. Cook',
		sector: 'Technology',
		country: 'US',
		fullTimeEmployees: '164000',
		phone: '408 996 1010',
		address: 'One Apple Park Way',
		city: 'Cupertino',
		state: 'CA',
		zip: '95014',
		dcfDiff: 4.15176,
		dcf: 150.082,
		image: 'https://financialmodelingprep.com/image-stock/AAPL.png',
		ipoDate: '1980-12-12',
		defaultImage: false,
		isEtf: false,
		isActivelyTrading: true,
		isAdr: false,
		isFund: false,
	},
	metrics: {
		dividendYielTTM: 0,
		volume: 51278844,
		yearHigh: 198.23,
		yearLow: 124.17,
	},
	ratios: [
		{
			dividendYielTTM: 0.005412875734193251,
			dividendYielPercentageTTM: 0.5412875734193251,
			peRatioTTM: 28.76791523047699,
			pegRatioTTM: 3.398209986600091,
			payoutRatioTTM: 0.15797804981004643,
			currentRatioTTM: 0.9815625425125837,
			quickRatioTTM: 0.8135848211070477,
			cashRatioTTM: 0.22733129006185832,
			daysOfSalesOutstandingTTM: 37.25360935371536,
			daysOfInventoryOutstandingTTM: 12.357922226265103,
			operatingCycleTTM: 21.543743710742863,
			daysOfPayablesOutstandingTTM: 78.5066807297448,
			cashConversionCycleTTM: -38.205912470922975,
			grossProfitMarginTTM: 0.4344924765518984,
			operatingProfitMarginTTM: 0.2923062096772093,
			pretaxProfitMarginTTM: 0.2901417695274957,
			netProfitMarginTTM: 0.2468138972164414,
			effectiveTaxRateTTM: 0.1493334530275147,
			returnOnAssetsTTM: 0.2828335890257225,
			returnOnEquityTTM: 1.649211812157629,
			returnOnCapitalEmployedTTM: 0.5342187314054504,
			netIncomePerEBTTTM: 0.8506665469724853,
			ebtPerEbitTTM: 0.9925952987721205,
			ebitPerRevenueTTM: 0.2923062096772093,
			debtRatioTTM: 0.32617195661387666,
			debtEquityRatioTTM: 1.8130537213392175,
			longTermDebtToCapitalizationTTM: 0.6193501531466102,
			totalDebtToCapitalizationTTM: 0.6445144319803721,
			interestCoverageTTM: 29.863225119744545,
			cashFlowToDebtRatioTTM: 1.0346998535871157,
			companyEquityMultiplierTTM: 5.558582473371603,
			receivablesTurnoverTTM: 9.79770836523248,
			payablesTurnoverTTM: 4.649285851945438,
			inventoryTurnoverTTM: 29.535709427288804,
			fixedAssetTurnoverTTM: 8.815912743972445,
			assetTurnoverTTM: 1.1459386696434435,
			operatingCashFlowPerShareTTM: 7.203132909243405,
			freeCashFlowPerShareTTM: 6.433270686869992,
			cashPerShareTTM: 3.980350134740222,
			operatingCashFlowSalesRatioTTM: 0.2945097191437048,
			freeCashFlowOperatingCashFlowRatioTTM: 0.8931211971133437,
			cashFlowCoverageRatiosTTM: 1.0346998535871157,
			shortTermCoverageRatiosTTM: 10.08760817200464,
			capitalExpenditureCoverageRatioTTM: 9.356392221762516,
			dividendPaidAndCapexCoverageRatioTTM: 4.179338384771762,
			priceBookValueRatioTTM: 45.22758813485085,
			priceToBookRatioTTM: 45.22758813485085,
			priceToSalesRatioTTM: 7.07163774460648,
			priceEarningsRatioTTM: 28.76791523047699,
			priceToFreeCashFlowsRatioTTM: 26.884996031172328,
			priceToOperatingCashFlowsRatioTTM: 24.10895400488184,
			priceCashFlowRatioTTM: 24.10895400488184,
			priceEarningsToGrowthRatioTTM: 3.398209986600091,
			priceSalesRatioTTM: 7.07163774460648,
			enterpriseValueMultipleTTM: 23.12482605516728,
			priceFairValueTTM: 45.22758813485085,
			dividendPerShareTTM: 0.94,
		},
	],
	insideTrades: [
		{
			symbol: 'AAPL',
			filingDate: '2023-10-03 21:09:17',
			transactionDate: '2023-10-01',
			reportingCik: '0001496686',
			transactionType: 'M-Exempt',
			securitiesOwned: 626085,
			companyCik: '0000320193',
			reportingName: 'WILLIAMS JEFFREY E',
			typeOfOwner: 'officer: COO',
			acquistionOrDisposition: 'A',
			formType: '4',
			securitiesTransacted: 136268,
			price: 0,
			securityName: 'Common Stock',
			link: 'https://www.sec.gov/Archives/edgar/data/320193/000032019323000093/0000320193-23-000093-index.htm',
		},
	],
	keyExecutives: [
		{
			title: 'Senior Vice President of People & Retail',
			name: "Ms. Deirdre  O'Brien",
			pay: 5019783,
			currencyPay: 'USD',
			gender: 'female',
			yearBorn: 1967,
			titleSince: 1676248586,
		},
	],
	splitsHistory: [
		{
			date: '2020-08-31',
			label: 'August 31, 20',
			numerator: 4,
			denominator: 1,
		},
	],
	stockDividend: [
		{
			date: '2023-08-11',
			label: 'August 11, 23',
			adjDividend: 0.24,
			dividend: 0.24,
			recordDate: '2023-08-14',
			paymentDate: '2023-08-17',
			declarationDate: '2023-08-03',
		},
	],
	stockNews: [
		{
			symbol: 'AAPL',
			publishedDate: '2023-10-04 15:15:36',
			title: 'Apple CEO Tim Cook Sells Shares Valued at About $88 Million',
			image: 'https://cdn.snapi.dev/images/v1/p/w/gettyimages-1660560144-b12dac563e6048fe88184489645bf0d3-2090214.jpg',
			site: 'Investopedia',
			text: 'Apple (AAPL) CEO Tim Cook made his biggest sale of company stock in more than two years as shares of the iPhone maker have lost ground since hitting an all-time high this summer.',
			url: 'https://www.investopedia.com/apple-ceo-tim-cook-sells-shares-valued-at-about-usd88-million-8347443',
		},
	],
	rating: [
		{
			symbol: 'AAPL',
			date: '2023-10-03',
			rating: 'S',
			ratingScore: 5,
			ratingRecommendation: 'Strong Buy',
			ratingDetailsDCFScore: 5,
			ratingDetailsDCFRecommendation: 'Strong Buy',
			ratingDetailsROEScore: 5,
			ratingDetailsROERecommendation: 'Strong Buy',
			ratingDetailsROAScore: 3,
			ratingDetailsROARecommendation: 'Neutral',
			ratingDetailsDEScore: 5,
			ratingDetailsDERecommendation: 'Strong Buy',
			ratingDetailsPEScore: 5,
			ratingDetailsPERecommendation: 'Strong Buy',
			ratingDetailsPBScore: 5,
			ratingDetailsPBRecommendation: 'Strong Buy',
		},
	],
	financialsAnnual: {
		income: [
			{
				date: '2022-09-24',
				symbol: 'AAPL',
				reportedCurrency: 'USD',
				cik: '0000320193',
				fillingDate: '2022-10-28',
				acceptedDate: '2022-10-27 18:01:14',
				calendarYear: '2022',
				period: 'FY',
				revenue: 394328000000,
				costOfRevenue: 223546000000,
				grossProfit: 170782000000,
				grossProfitRatio: 0.4330963056,
				researchAndDevelopmentExpenses: 26251000000,
				generalAndAdministrativeExpenses: 0,
				sellingAndMarketingExpenses: 0,
				sellingGeneralAndAdministrativeExpenses: 25094000000,
				otherExpenses: -334000000,
				operatingExpenses: 51345000000,
				costAndExpenses: 274891000000,
				interestIncome: 2825000000,
				interestExpense: 2931000000,
				depreciationAndAmortization: 11104000000,
				ebitda: 130541000000,
				ebitdaratio: 0.3310467428,
				operatingIncome: 119437000000,
				operatingIncomeRatio: 0.302887444,
				totalOtherIncomeExpensesNet: -334000000,
				incomeBeforeTax: 119103000000,
				incomeBeforeTaxRatio: 0.3020404333,
				incomeTaxExpense: 19300000000,
				netIncome: 99803000000,
				netIncomeRatio: 0.2530964071,
				eps: 6.15,
				epsdiluted: 6.11,
				weightedAverageShsOut: 16215963000,
				weightedAverageShsOutDil: 16325819000,
				link: 'https://www.sec.gov/Archives/edgar/data/320193/000032019322000108/0000320193-22-000108-index.htm',
				finalLink:
					'https://www.sec.gov/Archives/edgar/data/320193/000032019322000108/aapl-20220924.htm',
			},
			{
				date: '2021-09-25',
				symbol: 'AAPL',
				reportedCurrency: 'USD',
				cik: '0000320193',
				fillingDate: '2021-10-29',
				acceptedDate: '2021-10-28 18:04:28',
				calendarYear: '2021',
				period: 'FY',
				revenue: 365817000000,
				costOfRevenue: 212981000000,
				grossProfit: 152836000000,
				grossProfitRatio: 0.4177935963,
				researchAndDevelopmentExpenses: 21914000000,
				generalAndAdministrativeExpenses: 0,
				sellingAndMarketingExpenses: 0,
				sellingGeneralAndAdministrativeExpenses: 21973000000,
				otherExpenses: 258000000,
				operatingExpenses: 43887000000,
				costAndExpenses: 256868000000,
				interestIncome: 2843000000,
				interestExpense: 2645000000,
				depreciationAndAmortization: 11284000000,
				ebitda: 120233000000,
				ebitdaratio: 0.3286697994,
				operatingIncome: 108949000000,
				operatingIncomeRatio: 0.2978237753,
				totalOtherIncomeExpensesNet: 258000000,
				incomeBeforeTax: 109207000000,
				incomeBeforeTaxRatio: 0.2985290459,
				incomeTaxExpense: 14527000000,
				netIncome: 94680000000,
				netIncomeRatio: 0.2588179336,
				eps: 5.67,
				epsdiluted: 5.61,
				weightedAverageShsOut: 16701272000,
				weightedAverageShsOutDil: 16864919000,
				link: 'https://www.sec.gov/Archives/edgar/data/320193/000032019321000105/0000320193-21-000105-index.htm',
				finalLink:
					'https://www.sec.gov/Archives/edgar/data/320193/000032019321000105/aapl-20210925.htm',
			},
			{
				date: '2020-09-26',
				symbol: 'AAPL',
				reportedCurrency: 'USD',
				cik: '0000320193',
				fillingDate: '2020-10-30',
				acceptedDate: '2020-10-29 18:06:25',
				calendarYear: '2020',
				period: 'FY',
				revenue: 274515000000,
				costOfRevenue: 169559000000,
				grossProfit: 104956000000,
				grossProfitRatio: 0.3823324773,
				researchAndDevelopmentExpenses: 18752000000,
				generalAndAdministrativeExpenses: 0,
				sellingAndMarketingExpenses: 0,
				sellingGeneralAndAdministrativeExpenses: 19916000000,
				otherExpenses: 803000000,
				operatingExpenses: 38668000000,
				costAndExpenses: 208227000000,
				interestIncome: 3763000000,
				interestExpense: 2873000000,
				depreciationAndAmortization: 11056000000,
				ebitda: 77344000000,
				ebitdaratio: 0.2817478098,
				operatingIncome: 66288000000,
				operatingIncomeRatio: 0.2414731435,
				totalOtherIncomeExpensesNet: 803000000,
				incomeBeforeTax: 67091000000,
				incomeBeforeTaxRatio: 0.2443983025,
				incomeTaxExpense: 9680000000,
				netIncome: 57411000000,
				netIncomeRatio: 0.2091361128,
				eps: 3.31,
				epsdiluted: 3.28,
				weightedAverageShsOut: 17352119000,
				weightedAverageShsOutDil: 17528214000,
				link: 'https://www.sec.gov/Archives/edgar/data/320193/000032019320000096/0000320193-20-000096-index.htm',
				finalLink:
					'https://www.sec.gov/Archives/edgar/data/320193/000032019320000096/aapl-20200926.htm',
			},
			{
				date: '2019-09-28',
				symbol: 'AAPL',
				reportedCurrency: 'USD',
				cik: '0000320193',
				fillingDate: '2019-10-31',
				acceptedDate: '2019-10-30 18:12:36',
				calendarYear: '2019',
				period: 'FY',
				revenue: 260174000000,
				costOfRevenue: 161782000000,
				grossProfit: 98392000000,
				grossProfitRatio: 0.3781776811,
				researchAndDevelopmentExpenses: 16217000000,
				generalAndAdministrativeExpenses: 0,
				sellingAndMarketingExpenses: 0,
				sellingGeneralAndAdministrativeExpenses: 18245000000,
				otherExpenses: 1807000000,
				operatingExpenses: 34462000000,
				costAndExpenses: 196244000000,
				interestIncome: 4961000000,
				interestExpense: 3576000000,
				depreciationAndAmortization: 12547000000,
				ebitda: 76477000000,
				ebitdaratio: 0.2939455903,
				operatingIncome: 63930000000,
				operatingIncomeRatio: 0.2457201719,
				totalOtherIncomeExpensesNet: 1807000000,
				incomeBeforeTax: 65737000000,
				incomeBeforeTaxRatio: 0.2526655238,
				incomeTaxExpense: 10481000000,
				netIncome: 55256000000,
				netIncomeRatio: 0.2123809451,
				eps: 2.99,
				epsdiluted: 2.97,
				weightedAverageShsOut: 18471336000,
				weightedAverageShsOutDil: 18595652000,
				link: 'https://www.sec.gov/Archives/edgar/data/320193/000032019319000119/0000320193-19-000119-index.htm',
				finalLink:
					'https://www.sec.gov/Archives/edgar/data/320193/000032019319000119/a10-k20199282019.htm',
			},
			{
				date: '2018-09-29',
				symbol: 'AAPL',
				reportedCurrency: 'USD',
				cik: '0000320193',
				fillingDate: '2018-11-05',
				acceptedDate: '2018-11-05 08:01:40',
				calendarYear: '2018',
				period: 'FY',
				revenue: 265595000000,
				costOfRevenue: 163756000000,
				grossProfit: 101839000000,
				grossProfitRatio: 0.3834371882,
				researchAndDevelopmentExpenses: 14236000000,
				generalAndAdministrativeExpenses: 0,
				sellingAndMarketingExpenses: 0,
				sellingGeneralAndAdministrativeExpenses: 16705000000,
				otherExpenses: 2005000000,
				operatingExpenses: 30941000000,
				costAndExpenses: 194697000000,
				interestIncome: 5686000000,
				interestExpense: 3240000000,
				depreciationAndAmortization: 10903000000,
				ebitda: 81801000000,
				ebitdaratio: 0.3079914908,
				operatingIncome: 70898000000,
				operatingIncomeRatio: 0.2669402662,
				totalOtherIncomeExpensesNet: 2005000000,
				incomeBeforeTax: 72903000000,
				incomeBeforeTaxRatio: 0.2744893541,
				incomeTaxExpense: 13372000000,
				netIncome: 59531000000,
				netIncomeRatio: 0.2241420207,
				eps: 3,
				epsdiluted: 2.98,
				weightedAverageShsOut: 19821508000,
				weightedAverageShsOutDil: 20000436000,
				link: 'https://www.sec.gov/Archives/edgar/data/320193/000032019318000145/0000320193-18-000145-index.htm',
				finalLink:
					'https://www.sec.gov/Archives/edgar/data/320193/000032019318000145/a10-k20189292018.htm',
			},
		],
	},
	financialsQuarter: {
		income: [
			{
				date: '2023-07-01',
				symbol: 'AAPL',
				reportedCurrency: 'USD',
				cik: '0000320193',
				fillingDate: '2023-08-04',
				acceptedDate: '2023-08-03 18:04:43',
				calendarYear: '2023',
				period: 'Q3',
				revenue: 81797000000,
				costOfRevenue: 45384000000,
				grossProfit: 36413000000,
				grossProfitRatio: 0.4451630255,
				researchAndDevelopmentExpenses: 7442000000,
				generalAndAdministrativeExpenses: 0,
				sellingAndMarketingExpenses: 0,
				sellingGeneralAndAdministrativeExpenses: 5973000000,
				otherExpenses: -265000000,
				operatingExpenses: 13415000000,
				costAndExpenses: 58799000000,
				interestIncome: 980000000,
				interestExpense: 998000000,
				depreciationAndAmortization: 3052000000,
				ebitda: 22998000000,
				ebitdaratio: 0.2811594557,
				operatingIncome: 22998000000,
				operatingIncomeRatio: 0.2811594557,
				totalOtherIncomeExpensesNet: -265000000,
				incomeBeforeTax: 22733000000,
				incomeBeforeTaxRatio: 0.2779197281,
				incomeTaxExpense: 2852000000,
				netIncome: 19881000000,
				netIncomeRatio: 0.2430529237,
				eps: 1.27,
				epsdiluted: 1.26,
				weightedAverageShsOut: 15697614000,
				weightedAverageShsOutDil: 15775021000,
				link: 'https://www.sec.gov/Archives/edgar/data/320193/000032019323000077/0000320193-23-000077-index.htm',
				finalLink:
					'https://www.sec.gov/Archives/edgar/data/320193/000032019323000077/aapl-20230701.htm',
			},
			{
				date: '2023-04-01',
				symbol: 'AAPL',
				reportedCurrency: 'USD',
				cik: '0000320193',
				fillingDate: '2023-05-05',
				acceptedDate: '2023-05-04 18:03:52',
				calendarYear: '2023',
				period: 'Q2',
				revenue: 94836000000,
				costOfRevenue: 52860000000,
				grossProfit: 41976000000,
				grossProfitRatio: 0.4426167278,
				researchAndDevelopmentExpenses: 7457000000,
				generalAndAdministrativeExpenses: 0,
				sellingAndMarketingExpenses: 0,
				sellingGeneralAndAdministrativeExpenses: 6201000000,
				otherExpenses: 64000000,
				operatingExpenses: 13658000000,
				costAndExpenses: 66518000000,
				interestIncome: 918000000,
				interestExpense: 930000000,
				depreciationAndAmortization: 2898000000,
				ebitda: 31216000000,
				ebitdaratio: 0.3291577038,
				operatingIncome: 28318000000,
				operatingIncomeRatio: 0.2985996879,
				totalOtherIncomeExpensesNet: 64000000,
				incomeBeforeTax: 28382000000,
				incomeBeforeTaxRatio: 0.2992745371,
				incomeTaxExpense: 4222000000,
				netIncome: 24160000000,
				netIncomeRatio: 0.2547555781,
				eps: 1.53,
				epsdiluted: 1.52,
				weightedAverageShsOut: 15787154000,
				weightedAverageShsOutDil: 15847050000,
				link: 'https://www.sec.gov/Archives/edgar/data/320193/000032019323000064/0000320193-23-000064-index.htm',
				finalLink:
					'https://www.sec.gov/Archives/edgar/data/320193/000032019323000064/aapl-20230401.htm',
			},
			{
				date: '2022-12-31',
				symbol: 'AAPL',
				reportedCurrency: 'USD',
				cik: '0000320193',
				fillingDate: '2023-02-03',
				acceptedDate: '2023-02-02 18:01:30',
				calendarYear: '2023',
				period: 'Q1',
				revenue: 117154000000,
				costOfRevenue: 66822000000,
				grossProfit: 50332000000,
				grossProfitRatio: 0.4296225481,
				researchAndDevelopmentExpenses: 7709000000,
				generalAndAdministrativeExpenses: 0,
				sellingAndMarketingExpenses: 0,
				sellingGeneralAndAdministrativeExpenses: 6607000000,
				otherExpenses: -393000000,
				operatingExpenses: 14316000000,
				costAndExpenses: 81138000000,
				interestIncome: 868000000,
				interestExpense: 1003000000,
				depreciationAndAmortization: 2916000000,
				ebitda: 38932000000,
				ebitdaratio: 0.332314731,
				operatingIncome: 36016000000,
				operatingIncomeRatio: 0.3074244157,
				totalOtherIncomeExpensesNet: -393000000,
				incomeBeforeTax: 35623000000,
				incomeBeforeTaxRatio: 0.3040698568,
				incomeTaxExpense: 5625000000,
				netIncome: 29998000000,
				netIncomeRatio: 0.2560561312,
				eps: 1.89,
				epsdiluted: 1.88,
				weightedAverageShsOut: 15892723000,
				weightedAverageShsOutDil: 15955718000,
				link: 'https://www.sec.gov/Archives/edgar/data/320193/000032019323000006/0000320193-23-000006-index.htm',
				finalLink:
					'https://www.sec.gov/Archives/edgar/data/320193/000032019323000006/aapl-20221231.htm',
			},
			{
				date: '2022-09-24',
				symbol: 'AAPL',
				reportedCurrency: 'USD',
				cik: '0000320193',
				fillingDate: '2022-10-28',
				acceptedDate: '2022-10-27 18:01:14',
				calendarYear: '2022',
				period: 'Q4',
				revenue: 90146000000,
				costOfRevenue: 52051000000,
				grossProfit: 38095000000,
				grossProfitRatio: 0.4225922393,
				researchAndDevelopmentExpenses: 6761000000,
				generalAndAdministrativeExpenses: 0,
				sellingAndMarketingExpenses: 0,
				sellingGeneralAndAdministrativeExpenses: 6440000000,
				otherExpenses: -237000000,
				operatingExpenses: 13201000000,
				costAndExpenses: 65252000000,
				interestIncome: 753000000,
				interestExpense: 827000000,
				depreciationAndAmortization: 2865000000,
				ebitda: 27759000000,
				ebitdaratio: 0.3079337963,
				operatingIncome: 24894000000,
				operatingIncomeRatio: 0.2761520201,
				totalOtherIncomeExpensesNet: -237000000,
				incomeBeforeTax: 24657000000,
				incomeBeforeTaxRatio: 0.2735229517,
				incomeTaxExpense: 3936000000,
				netIncome: 20721000000,
				netIncomeRatio: 0.2298604486,
				eps: 1.29,
				epsdiluted: 1.29,
				weightedAverageShsOut: 16030382000,
				weightedAverageShsOutDil: 16118465000,
				link: 'https://www.sec.gov/Archives/edgar/data/320193/000032019322000108/0000320193-22-000108-index.htm',
				finalLink:
					'https://www.sec.gov/Archives/edgar/data/320193/000032019322000108/aapl-20220924.htm',
			},
			{
				date: '2022-06-25',
				symbol: 'AAPL',
				reportedCurrency: 'USD',
				cik: '0000320193',
				fillingDate: '2022-07-29',
				acceptedDate: '2022-07-28 18:06:56',
				calendarYear: '2022',
				period: 'Q3',
				revenue: 82959000000,
				costOfRevenue: 47074000000,
				grossProfit: 35885000000,
				grossProfitRatio: 0.4325630733,
				researchAndDevelopmentExpenses: 6797000000,
				generalAndAdministrativeExpenses: 0,
				sellingAndMarketingExpenses: 0,
				sellingGeneralAndAdministrativeExpenses: 6012000000,
				otherExpenses: -10000000,
				operatingExpenses: 12809000000,
				costAndExpenses: 59883000000,
				interestIncome: 722000000,
				interestExpense: 719000000,
				depreciationAndAmortization: 2805000000,
				ebitda: 25881000000,
				ebitdaratio: 0.3119733844,
				operatingIncome: 23076000000,
				operatingIncomeRatio: 0.2781615015,
				totalOtherIncomeExpensesNet: -10000000,
				incomeBeforeTax: 23066000000,
				incomeBeforeTaxRatio: 0.27804096,
				incomeTaxExpense: 3624000000,
				netIncome: 19442000000,
				netIncomeRatio: 0.2343567304,
				eps: 1.2,
				epsdiluted: 1.2,
				weightedAverageShsOut: 16162945000,
				weightedAverageShsOutDil: 16262203000,
				link: 'https://www.sec.gov/Archives/edgar/data/320193/000032019322000070/0000320193-22-000070-index.htm',
				finalLink:
					'https://www.sec.gov/Archives/edgar/data/320193/000032019322000070/aapl-20220625.htm',
			},
		],
	},
};

export const mockIncomeStatements = [
	{
		date: '2023-09-30',
		symbol: 'AAPL',
		reportedCurrency: 'USD',
		cik: '0000320193',
		fillingDate: '2023-11-03',
		acceptedDate: '2023-11-02 18:08:27',
		calendarYear: '2023',
		period: 'FY',
		revenue: 383285000000,
		costOfRevenue: 214137000000,
		grossProfit: 169148000000,
		grossProfitRatio: 0.4413112958,
		researchAndDevelopmentExpenses: 29915000000,
		generalAndAdministrativeExpenses: 0,
		sellingAndMarketingExpenses: 0,
		sellingGeneralAndAdministrativeExpenses: 24932000000,
		otherExpenses: -565000000,
		operatingExpenses: 54847000000,
		costAndExpenses: 268984000000,
		interestIncome: 3750000000,
		interestExpense: 3933000000,
		depreciationAndAmortization: 11519000000,
		ebitda: 125820000000,
		ebitdaratio: 0.3282674772,
		operatingIncome: 114301000000,
		operatingIncomeRatio: 0.2982141227,
		totalOtherIncomeExpensesNet: -565000000,
		incomeBeforeTax: 113736000000,
		incomeBeforeTaxRatio: 0.2967400237,
		incomeTaxExpense: 16741000000,
		netIncome: 96995000000,
		netIncomeRatio: 0.2530623426,
		eps: 6.16,
		epsdiluted: 6.13,
		weightedAverageShsOut: 15812547000,
		weightedAverageShsOutDil: 15812547000,
		link: 'https://www.sec.gov/Archives/edgar/data/320193/000032019323000106/0000320193-23-000106-index.htm',
		finalLink:
			'https://www.sec.gov/Archives/edgar/data/320193/000032019323000106/aapl-20230930.htm',
	},
	{
		date: '2022-09-24',
		symbol: 'AAPL',
		reportedCurrency: 'USD',
		cik: '0000320193',
		fillingDate: '2022-10-28',
		acceptedDate: '2022-10-27 18:01:14',
		calendarYear: '2022',
		period: 'FY',
		revenue: 394328000000,
		costOfRevenue: 223546000000,
		grossProfit: 170782000000,
		grossProfitRatio: 0.4330963056,
		researchAndDevelopmentExpenses: 26251000000,
		generalAndAdministrativeExpenses: 0,
		sellingAndMarketingExpenses: 0,
		sellingGeneralAndAdministrativeExpenses: 25094000000,
		otherExpenses: -334000000,
		operatingExpenses: 51345000000,
		costAndExpenses: 274891000000,
		interestIncome: 2825000000,
		interestExpense: 2931000000,
		depreciationAndAmortization: 11104000000,
		ebitda: 130541000000,
		ebitdaratio: 0.3310467428,
		operatingIncome: 119437000000,
		operatingIncomeRatio: 0.302887444,
		totalOtherIncomeExpensesNet: -334000000,
		incomeBeforeTax: 119103000000,
		incomeBeforeTaxRatio: 0.3020404333,
		incomeTaxExpense: 19300000000,
		netIncome: 99803000000,
		netIncomeRatio: 0.2530964071,
		eps: 6.15,
		epsdiluted: 6.11,
		weightedAverageShsOut: 16325819000,
		weightedAverageShsOutDil: 16325819000,
		link: 'https://www.sec.gov/Archives/edgar/data/320193/000032019322000108/0000320193-22-000108-index.htm',
		finalLink:
			'https://www.sec.gov/Archives/edgar/data/320193/000032019322000108/aapl-20220924.htm',
	},
	{
		date: '2021-09-25',
		symbol: 'AAPL',
		reportedCurrency: 'USD',
		cik: '0000320193',
		fillingDate: '2021-10-29',
		acceptedDate: '2021-10-28 18:04:28',
		calendarYear: '2021',
		period: 'FY',
		revenue: 365817000000,
		costOfRevenue: 212981000000,
		grossProfit: 152836000000,
		grossProfitRatio: 0.4177935963,
		researchAndDevelopmentExpenses: 21914000000,
		generalAndAdministrativeExpenses: 0,
		sellingAndMarketingExpenses: 0,
		sellingGeneralAndAdministrativeExpenses: 21973000000,
		otherExpenses: 258000000,
		operatingExpenses: 43887000000,
		costAndExpenses: 256868000000,
		interestIncome: 2843000000,
		interestExpense: 2645000000,
		depreciationAndAmortization: 11284000000,
		ebitda: 120233000000,
		ebitdaratio: 0.3286697994,
		operatingIncome: 108949000000,
		operatingIncomeRatio: 0.2978237753,
		totalOtherIncomeExpensesNet: 258000000,
		incomeBeforeTax: 109207000000,
		incomeBeforeTaxRatio: 0.2985290459,
		incomeTaxExpense: 14527000000,
		netIncome: 94680000000,
		netIncomeRatio: 0.2588179336,
		eps: 5.67,
		epsdiluted: 5.61,
		weightedAverageShsOut: 16864919000,
		weightedAverageShsOutDil: 16864919000,
		link: 'https://www.sec.gov/Archives/edgar/data/320193/000032019321000105/0000320193-21-000105-index.htm',
		finalLink:
			'https://www.sec.gov/Archives/edgar/data/320193/000032019321000105/aapl-20210925.htm',
	},
	{
		date: '2020-09-26',
		symbol: 'AAPL',
		reportedCurrency: 'USD',
		cik: '0000320193',
		fillingDate: '2020-10-30',
		acceptedDate: '2020-10-29 18:06:25',
		calendarYear: '2020',
		period: 'FY',
		revenue: 274515000000,
		costOfRevenue: 169559000000,
		grossProfit: 104956000000,
		grossProfitRatio: 0.3823324773,
		researchAndDevelopmentExpenses: 18752000000,
		generalAndAdministrativeExpenses: 0,
		sellingAndMarketingExpenses: 0,
		sellingGeneralAndAdministrativeExpenses: 19916000000,
		otherExpenses: 803000000,
		operatingExpenses: 38668000000,
		costAndExpenses: 208227000000,
		interestIncome: 3763000000,
		interestExpense: 2873000000,
		depreciationAndAmortization: 11056000000,
		ebitda: 77344000000,
		ebitdaratio: 0.2817478098,
		operatingIncome: 66288000000,
		operatingIncomeRatio: 0.2414731435,
		totalOtherIncomeExpensesNet: 803000000,
		incomeBeforeTax: 67091000000,
		incomeBeforeTaxRatio: 0.2443983025,
		incomeTaxExpense: 9680000000,
		netIncome: 57411000000,
		netIncomeRatio: 0.2091361128,
		eps: 3.31,
		epsdiluted: 3.28,
		weightedAverageShsOut: 17528214000,
		weightedAverageShsOutDil: 17528214000,
		link: 'https://www.sec.gov/Archives/edgar/data/320193/000032019320000096/0000320193-20-000096-index.htm',
		finalLink:
			'https://www.sec.gov/Archives/edgar/data/320193/000032019320000096/aapl-20200926.htm',
	},
	{
		date: '2019-09-28',
		symbol: 'AAPL',
		reportedCurrency: 'USD',
		cik: '0000320193',
		fillingDate: '2019-10-31',
		acceptedDate: '2019-10-30 18:12:36',
		calendarYear: '2019',
		period: 'FY',
		revenue: 260174000000,
		costOfRevenue: 161782000000,
		grossProfit: 98392000000,
		grossProfitRatio: 0.3781776811,
		researchAndDevelopmentExpenses: 16217000000,
		generalAndAdministrativeExpenses: 0,
		sellingAndMarketingExpenses: 0,
		sellingGeneralAndAdministrativeExpenses: 18245000000,
		otherExpenses: 1807000000,
		operatingExpenses: 34462000000,
		costAndExpenses: 196244000000,
		interestIncome: 4961000000,
		interestExpense: 3576000000,
		depreciationAndAmortization: 12547000000,
		ebitda: 76477000000,
		ebitdaratio: 0.2939455903,
		operatingIncome: 63930000000,
		operatingIncomeRatio: 0.2457201719,
		totalOtherIncomeExpensesNet: 1807000000,
		incomeBeforeTax: 65737000000,
		incomeBeforeTaxRatio: 0.2526655238,
		incomeTaxExpense: 10481000000,
		netIncome: 55256000000,
		netIncomeRatio: 0.2123809451,
		eps: 2.99,
		epsdiluted: 2.97,
		weightedAverageShsOut: 18595652000,
		weightedAverageShsOutDil: 18595652000,
		link: 'https://www.sec.gov/Archives/edgar/data/320193/000032019319000119/0000320193-19-000119-index.htm',
		finalLink:
			'https://www.sec.gov/Archives/edgar/data/320193/000032019319000119/a10-k20199282019.htm',
	},
];
