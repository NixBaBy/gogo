import { smart } from "@babel/template";
import "../styles/SmallNews.css";
const SmallNewsArr = [
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/600/images/c/2024/12/-18122024-1734511776-1522445918-01.jpg",
    h2: "MN Tower: Бэлэн түрээслэгчтэй 1000-10000 мкв талбай худалдана",
    share: "2",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/600/images/c/2024/12/326174-19122024-1734576479-955648620-logo.jpg",
    h2: "“Орано Майнинг” компаниас мэдэгдэл гаргалаа",
    share: "12",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/600/images/c/2024/12/326182-19122024-1734589033-1860541414-evseg.jpg",
    h2: "Эвсэг брэнд 60% хүртэл шинэ жилийн хямдралт худалдаа зарлалаа",
    share: "14",
  },
];
export const SmallNews = () => {
  return (
    <div className="smallFlex">
      {SmallNewsArr.map((news) => {
        return (
          <div className="smallnews">
            <div className="smallImg">
              <img src={news.img} alt="" />
            </div>
            <h2>{news.h2}</h2>
            <div className="small-share">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
              </svg>
              <p>{news.share}</p>
            </div>
          </div>
        );
      })}
      <div className="reclam-img">
        <img
          src="https://mgl.gogo.mn/banner_gogo/banner/2024/12/18/news-b2/videourl/1734506915/externaal%20web_13.%20gogo.mn.png"
          alt=""
        />
      </div>
    </div>
  );
};
