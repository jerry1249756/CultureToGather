import express from "express";
const router = express.Router();

import axios from "axios";
import cheerio from "cheerio";
const musicUrl =
  "https://ticket.com.tw/application/UTK01/UTK0101_06.aspx?TYPE=1&CATEGORY=77"; // music

const linkPrefix = "https://ticket.com.tw/application/";

const scrapeMusicData = async () => {
  const eventList = [];
  const { data } = await axios.get(musicUrl);
  const $ = cheerio.load(data);
  const listData = $(".column");
  listData.each((idx, el) => {
    let listItem = { pic: "", time: "", name: "", description: "", link: "" };
    listItem.pic = $(el).children("a").children("img").attr("data-original");
    listItem.time = $(el).children("div").children("p").children("span").text();
    listItem.name = $(el).children("div").children("h4").text();
    listItem.description = $(el).children("div").children("div").text();
    listItem.link = linkPrefix.concat(
      $(el).children("div").children("p").children("a").attr("href").slice(3)
    );
    eventList.push(listItem);
  });
  return eventList;
};

router.get("/data", async (req, res) => {
  const data = await scrapeMusicData();
  res.json(data).status(200);
});

export default router;
