import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  // articles = [
  //   {
  //     source: { id: "bbc-news", name: "BBC News" },
  //     author: "https://www.facebook.com/bbcnews",
  //     title: "Indian PM Modi's Twitter hacked with bitcoin tweet",
  //     description:
  //       "The Indian prime minister's account had a message stating that bitcoin would be distributed to citizens.",
  //     url: "https://www.bbc.co.uk/news/world-asia-india-59627124",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/news/1024/branded_news/5998/production/_122063922_mediaitem122063921.jpg",
  //     publishedAt: "2021-12-12T10:59:57Z",
  //     content:
  //       "Image source, AFP via Getty Images\r\nImage caption, Modi has has more than 70 million Twitter followers\r\nIndian Prime Minister Narendra Modi's Twitter account was hacked with a message saying India ha… [+854 chars]",
  //   },
  //   {
  //     source: { id: null, name: "New York Times" },
  //     author: "Corey Kilgannon",
  //     title: "Why New York State Is Experiencing a Bitcoin Boom",
  //     description:
  //       "Cryptocurrency miners are flocking to New York’s faded industrial towns, prompting concern over the environmental impact of huge computer farms.",
  //     url: "https://www.nytimes.com/2021/12/05/nyregion/bitcoin-mining-upstate-new-york.html",
  //     urlToImage:
  //       "https://static01.nyt.com/images/2021/11/25/nyregion/00nybitcoin5/00nybitcoin5-facebookJumbo.jpg",
  //     publishedAt: "2021-12-06T00:42:28Z",
  //     content:
  //       "The plant opening northeast of Niagara Falls this month, in Somerset, N.Y., is part of a $550 million project by Terawulf, a Bitcoin mining company. The project also includes a proposed 150-megawatt … [+1514 chars]",
  //   },
  //   {
  //     source: { id: "engadget", name: "Engadget" },
  //     author: "Steve Dent",
  //     title:
  //       "Nothing's 'Black Edition' brings a modern touch to its funky Ear 1 buds",
  //     description:
  //       'Earlier this year, Nothing released a pair of relatively cheap $99 Ear 1 earbuds with a fun transparent case, wireless charging and decent sound quality. Now, the company (created by OnePlus cofounder Carl Pei) has unveiled the new Ear 1 "Black Edition" that …',
  //     url: "https://www.engadget.com/nothing-unveils-a-black-edition-of-its-ear-1-wireless-buds-144518774.html",
  //     urlToImage:
  //       "https://s.yimg.com/os/creatr-uploaded-images/2021-12/722a9000-52ab-11ec-962a-b075b43f57f3",
  //     publishedAt: "2021-12-01T14:45:18Z",
  //     content:
  //       "Earlier this year, Nothing released a pair of relatively cheap $99 Ear 1 earbuds with a fun transparent case, wireless charging and decent sound quality. Now, the company (created by OnePlus cofounde… [+1395 chars]",
  //   },
  //   {
  //     source: { id: "reuters", name: "Reuters" },
  //     author: null,
  //     title:
  //       "Explainer: What we know so far about El Salvador's volcano-powered bitcoin bond - Reuters",
  //     description:
  //       'El Salvador plans to build the world\'s first <a href="https://www.reuters.com/markets/rates-bonds/el-salvador-plans-first-bitcoin-city-backed-by-bitcoin-bonds-2021-11-21" target="_blank">"Bitcoin City"</a> with money from a $1 billion bitcoin-backed bond the …',
  //     url: "https://www.reuters.com/markets/us/what-we-know-so-far-about-el-salvadors-volcano-powered-bitcoin-bond-2021-11-22/",
  //     urlToImage:
  //       "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=59",
  //     publishedAt: "2021-11-22T23:35:00Z",
  //     content:
  //       "MIZATA, El Salvador/LONDON, Nov 22 (Reuters) - El Salvador plans to build the world's first \"Bitcoin City\" with money from a $1 billion bitcoin-backed bond the country's President Nayib Bukele said o… [+3147 chars]",
  //   },
  //   {
  //     source: { id: "reuters", name: "Reuters" },
  //     author: "Reuters Editorial",
  //     title: "El Salvador plans 'Bitcoin City' - Reuters",
  //     description:
  //       "After becoming the first country to accept the cryptocurrency as legal tender, El Salvador plans to build the world's first Bitcoin City, funded initially by bitcoin-backed bonds.",
  //     url: "https://www.reuters.com/video/watch/idPEH4?now=true",
  //     urlToImage:
  //       "https://ajo.prod.reuters.tv/api/v2/img/619b824be4b085d396fd1eb4-1637581387726?location=LANDSCAPE",
  //     publishedAt: "2021-11-22T12:01:51Z",
  //     content:
  //       "Posted \r\nAfter becoming the first country to accept the cryptocurrency as legal tender, El Salvador plans to build the world's first Bitcoin City, funded initially by bitcoin-backed bonds.",
  //   },
  //   {
  //     source: { id: "engadget", name: "Engadget" },
  //     author: "Jon Fingas",
  //     title:
  //       "Someone 'briefly compromised' the Indian Prime Minister's Twitter account",
  //     description:
  //       "People aren't done hijacking major politicians' Twitter accounts for financial gain. TechCrunch reports an intruder temporarily seized control of Indian Prime Minister Narendra Modi's Twitter account on December 12th in local time. The attacker tweeted a bogu…",
  //     url: "https://www.engadget.com/india-prime-minister-modi-twitter-compromised-205939729.html",
  //     urlToImage:
  //       "https://s.yimg.com/os/creatr-uploaded-images/2021-12/cf1459a0-5b88-11ec-aded-e4c12238adb4",
  //     publishedAt: "2021-12-12T20:59:39Z",
  //     content:
  //       "People aren't done hijacking major politicians' Twitter accounts for financial gain. TechCrunch reports an intruder temporarily seized control of Indian Prime Minister Narendra Modi's Twitter account… [+1087 chars]",
  //   },
  //   {
  //     source: { id: "reuters", name: "Reuters" },
  //     author: null,
  //     title: "Bitcoin rises 2.1% to reclaim $50000 - Reuters",
  //     description: "Bitcoin rose on Sunday to reclaim levels above $50,000.",
  //     url: "https://www.reuters.com/business/bitcoin-rises-21-reclaim-50000-2021-12-12/",
  //     urlToImage:
  //       "https://www.reuters.com/resizer/iiUX4W5Aq1A8rnS9IuasKvCU3So=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/3XJHXCQ435MVDN47AUIXPXUFWI.jpg",
  //     publishedAt: "2021-12-12T18:23:00Z",
  //     content:
  //       "Representation of cryptocurrency bitcoin is seen in this illustration taken November 29, 2021. REUTERS/Dado Ruvic/IllustrationDec 12 (Reuters) - Bitcoin rose on Sunday to reclaim levels above $50,000… [+514 chars]",
  //   },
  //   {
  //     source: { id: "the-verge", name: "The Verge" },
  //     author: "Jon Porter",
  //     title: "Nothing’s debut earbuds now come in black",
  //     description:
  //       "Nothing’s Ear 1 earbuds will soon come in black. They’ll be widely available from December 13th at the same price as the original white versions: $99 / £99.",
  //     url: "https://www.theverge.com/2021/12/1/22802107/nothing-ear-1-black-edition-price",
  //     urlToImage:
  //       "https://cdn.vox-cdn.com/thumbor/rmLBWDzawqeTLS-e8X13lgVNBd4=/0x551:7695x4580/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23042763/Nothing__1__black_edition_closed_case.jpg",
  //     publishedAt: "2021-12-01T12:00:00Z",
  //     content:
  //       "Available for the same price, $99, on December 13th\r\nThe Ear 1 earbuds and case, now in black.\r\nImage: Nothing\r\nNothings Ear 1 earbuds, which launched earlier this year in a fetching white and transp… [+1865 chars]",
  //   },
  //   {
  //     source: { id: "reuters", name: "Reuters" },
  //     author: "Jonathan Stempel",
  //     title:
  //       "Self-proclaimed bitcoin inventor largely prevails in $54 billion bitcoin trial - Reuters.com",
  //     description:
  //       "A computer scientist who has claimed to be the inventor of bitcoin largely prevailed on Monday in a Florida jury trial over whether the estate of a former business partner deserved half of a bitcoin cache worth now about $54 billion.",
  //     url: "https://www.reuters.com/article/us-crypto-currency-lawsuit-idUSKBN2IL25A",
  //     urlToImage:
  //       "https://static.reuters.com/resources/r/?m=02&d=20211206&t=2&i=1583817488&r=LYNXMPEHB510V&w=800",
  //     publishedAt: "2021-12-06T22:27:00Z",
  //     content:
  //       "(Reuters) - A computer scientist who has claimed to be the inventor of bitcoin largely prevailed on Monday in a Florida jury trial over whether the estate of a former business partner deserved half o… [+1785 chars]",
  //   },
  //   {
  //     source: { id: "engadget", name: "Engadget" },
  //     author: "Mat Smith",
  //     title:
  //       "The Morning After: Adele has the power to remove the shuffle button",
  //     description:
  //       'Spotify has removed the shuffle button from all album pages after Adele pressed the company for the change in time for the launch of her album 30. According to her own tweet\r\n, albums should be listened to "as [artists] intended" as they tell "a story." If yo…',
  //     url: "https://www.engadget.com/the-morning-after-adele-has-the-power-to-remove-the-shuffle-button-121513705.html",
  //     urlToImage:
  //       "https://s.yimg.com/os/creatr-uploaded-images/2021-11/e65e8590-45ee-11ec-b17f-4761a0a5b5ac",
  //     publishedAt: "2021-11-22T12:15:13Z",
  //     content:
  //       "Spotify has removed the shuffle button from all album pages after Adele pressed the company for the change in time for the launch of her album 30. According to her own tweet\r\n, albums should be liste… [+3186 chars]",
  //   },
  //   {
  //     source: { id: "reuters", name: "Reuters" },
  //     author: null,
  //     title: "Bitcoin falls 8.4% to $49228.82 - Reuters",
  //     description:
  //       "Bitcoin dropped 8.4% to $49,228.82 at 20:01 GMT on Saturday, losing $4,514.87 from its previous close.",
  //     url: "https://www.reuters.com/markets/currencies/bitcoin-falls-84-4922882-2021-12-04/",
  //     urlToImage:
  //       "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=60",
  //     publishedAt: "2021-12-04T20:13:00Z",
  //     content:
  //       "Dec 4 (Reuters) - Bitcoin dropped 8.4% to $49,228.82 at 20:01 GMT on Saturday, losing $4,514.87 from its previous close.\r\nBitcoin, the world's biggest and best-known cryptocurrency, is down 28.7% fro… [+355 chars]",
  //   },
  //   {
  //     source: { id: "reuters", name: "Reuters" },
  //     author: "Reuters Editorial",
  //     title: "Bitcoin plunges by a fifth - Reuters.com",
  //     description:
  //       "Bitcoin shed a fifth of its value on Saturday as a combination of profit-taking and macro-economic concerns triggered nearly a billion dollars worth of selling across cryptocurrencies.",
  //     url: "https://www.reuters.com/video/watch/idPE$h?now=true",
  //     urlToImage:
  //       "https://ajo.prod.reuters.tv/api/v2/img/61abc29fe4b09631b0e4401a-1638646431577?location=LANDSCAPE",
  //     publishedAt: "2021-12-04T19:55:07Z",
  //     content:
  //       "Posted \r\nBitcoin shed a fifth of its value on Saturday as a combination of profit-taking and macro-economic concerns triggered nearly a billion dollars worth of selling across cryptocurrencies.",
  //   },
  //   {
  //     source: { id: "reuters", name: "Reuters" },
  //     author: "Reuters Editorial",
  //     title: "Bitcoin plunges by a fifth - Reuters.com",
  //     description:
  //       "Bitcoin shed a fifth of its value on Saturday as a combination of profit-taking and macro-economic concerns triggered nearly a billion dollars worth of selling across cryptocurrencies. Fred Katayama reports.",
  //     url: "https://www.reuters.com/video/watch/idOVF6MNO97",
  //     urlToImage:
  //       "https://static.reuters.com/resources/r/?d=20211204&i=OVF6MNO97&r=OVF6MNO97&t=2",
  //     publishedAt: "2021-12-04T19:35:10Z",
  //     content:
  //       "Posted \r\nBitcoin shed a fifth of its value on Saturday as a combination of profit-taking and macro-economic concerns triggered nearly a billion dollars worth of selling across cryptocurrencies. Fred … [+16 chars]",
  //   },
  //   {
  //     source: { id: "reuters", name: "Reuters" },
  //     author: null,
  //     title: "Bitcoin tumbles 5.5% to $53436 - Reuters",
  //     description:
  //       "Bitcoin plunged 5.5% to $53,435.9 at 22:04 GMT on Friday, losing $3,112.06 from its previous close.",
  //     url: "https://www.reuters.com/markets/us/bitcoin-tumbles-55-53436-2021-12-03/",
  //     urlToImage:
  //       "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=60",
  //     publishedAt: "2021-12-03T22:18:00Z",
  //     content:
  //       "Dec 3 (Reuters) - Bitcoin plunged 5.5% to $53,435.9 at 22:04 GMT on Friday, losing $3,112.06 from its previous close.\r\nBitcoin, the world's biggest and best-known cryptocurrency, is down 22.6% from t… [+350 chars]",
  //   },
  //   {
  //     source: { id: "reuters", name: "Reuters" },
  //     author: null,
  //     title: "Bitcoin falls 9.2% to $48782 - Reuters",
  //     description:
  //       "Bitcoin dropped 9.29% to $48,752.15 at 22:01 GMT on Saturday, losing $4,991.54 from its previous close.",
  //     url: "https://www.reuters.com/markets/us/bitcoin-falls-92-48782-2021-12-04/",
  //     urlToImage:
  //       "https://www.reuters.com/resizer/Zs3QkhXWP8WbC4oUMJ-AeHu0gHc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/AHNVTFBYQZMC3P7KLKDEWPZ5RM.jpg",
  //     publishedAt: "2021-12-04T22:05:00Z",
  //     content:
  //       "A representation of the virtual cryptocurrency Bitcoin is seen in this picture illustration taken October 19, 2021. REUTERS/Edgar SuDec 4 (Reuters) - Bitcoin dropped 9.29% to $48,752.15 at 22:01 GMT … [+489 chars]",
  //   },
  //   {
  //     source: { id: "the-globe-and-mail", name: "The Globe And Mail" },
  //     author: "Alun John, Tom Wilson",
  //     title: "Bitcoin tumbles 5% after weekend battering - The Globe and Mail",
  //     description:
  //       "<ol><li>Bitcoin tumbles 5% after weekend battering  The Globe and Mail\r\n</li><li>Bitcoin price plummets after steep weekend decline  Globalnews.ca\r\n</li><li>The crypto market had a rough weekend --bitcoin falls through $50,000  ForexLive\r\n</li><li>Shock to cr…",
  //     url: "https://www.theglobeandmail.com/business/international-business/article-bitcoin-tumbles-5-after-weekend-battering/",
  //     urlToImage:
  //       "https://www.theglobeandmail.com/resizer/OtLT4UXCDTZw9jcyOWneeKqZB8s=/1200x770/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/tgam/BYC6YSSF6ZIWJLNFRHKOE2IQKA.JPG",
  //     publishedAt: "2021-12-06T12:10:30Z",
  //     content:
  //       "Bitcoin tumbled almost 5% on Monday as the start of the week offered little respite to the worlds largest cryptocurrency after a bruising weekend where at one point it lost over a fifth of its value.… [+2615 chars]",
  //   },
  //   {
  //     source: { id: "reuters", name: "Reuters" },
  //     author: "Reuters Editorial",
  //     title:
  //       "Explainer: What we know about El Salvador's bitcoin bond - Reuters.com",
  //     description:
  //       "El Salvador plans to build the world's first \"Bitcoin City\" with money from a $1 billion bitcoin-backed bond, according to the country's President Nayib Bukele. Here is what we know about the proposed bond and some of the details that still need to be filled …",
  //     url: "https://www.reuters.com/video/watch/idOVF4TQG0B",
  //     urlToImage:
  //       "https://static.reuters.com/resources/r/?d=20211123&i=OVF4TQG0B&r=OVF4TQG0B&t=2",
  //     publishedAt: "2021-11-23T17:46:58Z",
  //     content:
  //       "Posted \r\nEl Salvador plans to build the world's first \"Bitcoin City\" with money from a $1 billion bitcoin-backed bond, according to the country's President Nayib Bukele. Here is what we know about th… [+92 chars]",
  //   },
  //   {
  //     source: { id: "reuters", name: "Reuters" },
  //     author: "Reuters Editorial",
  //     title:
  //       "Self-proclaimed bitcoin creator hails court victory - Reuters Australia",
  //     description:
  //       "A computer scientist who has claimed to be the inventor of bitcoin largely prevailed this week in a Florida jury trial over whether the estate of a former business partner deserved half of a bitcoin cache worth more than $50 billion.  Conway G. Gittens has mo…",
  //     url: "https://www.reuters.com/video/watch/idRCV00AJB3",
  //     urlToImage:
  //       "https://static.reuters.com/resources/r/?d=20211209&i=RCV00AJB3&r=RCV00AJB3&t=2",
  //     publishedAt: "2021-12-09T23:10:33Z",
  //     content:
  //       "Posted \r\nA computer scientist who has claimed to be the inventor of bitcoin largely prevailed this week in a Florida jury trial over whether the estate of a former business partner deserved half of a… [+70 chars]",
  //   },
  //   {
  //     source: { id: "reuters", name: "Reuters" },
  //     author: "Reuters Editorial",
  //     title:
  //       "Self-proclaimed bitcoin creator hails court victory - Reuters.com",
  //     description:
  //       "A computer scientist who has claimed to be the inventor of bitcoin largely prevailed this week in a Florida jury trial over whether the estate of a former business partner deserved half of a bitcoin cache worth more than $50 billion.  Conway G. Gittens has mo…",
  //     url: "https://www.reuters.com/video/watch/idOVF7BN91N",
  //     urlToImage:
  //       "https://static.reuters.com/resources/r/?d=20211209&i=OVF7BN91N&r=OVF7BN91N&t=2",
  //     publishedAt: "2021-12-09T21:49:26Z",
  //     content:
  //       "Posted \r\nA computer scientist who has claimed to be the inventor of bitcoin largely prevailed this week in a Florida jury trial over whether the estate of a former business partner deserved half of a… [+70 chars]",
  //   },
  //   {
  //     source: { id: null, name: "Gizmodo.com" },
  //     author: "Tom McKay",
  //     title: "CIA Director: Duh, Of Course, the CIA Is Into Cryptocurrency",
  //     description:
  //       "In a disclosure that should surprise no one, the head honcho at the CIA has confirmed that the intelligence agency has multiple projects related to cryptocurrency.Read more...",
  //     url: "https://gizmodo.com/cia-director-duh-of-course-the-cia-is-into-cryptocur-1848180577",
  //     urlToImage:
  //       "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/6abb5a9102ceabd17d8071b031766c51.jpg",
  //     publishedAt: "2021-12-08T20:10:00Z",
  //     content:
  //       "In a disclosure that should surprise no one, the head honcho at the CIA has confirmed that the intelligence agency has multiple projects related to cryptocurrency.\r\nRumorsoften not entirely seriousha… [+4310 chars]",
  //   },
  // ]

  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  articles = [];

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    // console.log("hello i am a constructor from news component");
    this.state = {
      articles: this.articles,
      loading: true,
      
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)}-News`;
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4c5948a4adda4982960a4d49299ad8dc&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  // handleNextClick = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };

  // handlePrevClick = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    // this.updateNews();
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4c5948a4adda4982960a4d49299ad8dc&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
    });
  };

  render() {
    return (
      <>
        <h1 className="text-center">
          Top {this.capitalizeFirstLetter(this.props.category)} Headlines
        </h1>
        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 31) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageURL={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn_400x400.png"
                      }
                      newsURL={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            Next &rarr;{" "}
          </button>
        </div> */}
      </>
    );
  }
}

export default News;
