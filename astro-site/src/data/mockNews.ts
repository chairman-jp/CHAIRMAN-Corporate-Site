import ceoImage from "../assets/images/CEO-image.webp";
import jfcStageImage from "../assets/images/JFC_stage_image.webp";
import bitekiCoverImage from "../assets/images/news/biteki-2026-06-koso-life/cover.jpg";
import livaponOpenImage from "../assets/images/news/livapon-online-store-launch/cover.svg";
import jfcaCoverImage from "../assets/images/news/livapon-japan-festival-canada-2026/cover.jpg";
import jfcaReportCoverImage from "../assets/images/news/livapon-japan-festival-canada-2026-report/cover.jpg";
import jfcaReportSpeechImage from "../assets/images/news/livapon-japan-festival-canada-2026-report/opening-speech.jpg";
import jfcaReportGiftImage from "../assets/images/news/livapon-japan-festival-canada-2026-report/gift-presentation.jpg";
import jfcaReportCalligraphyImage from "../assets/images/news/livapon-japan-festival-canada-2026-report/calligraphy.jpg";
import jfcaReportBoothImage from "../assets/images/news/livapon-japan-festival-canada-2026-report/booth.jpg";
import jfcaReportLuckyDrawImage from "../assets/images/news/livapon-japan-festival-canada-2026-report/lucky-draw.jpg";
import type { ImageMetadata } from "astro";
import type { NewsArticle } from "../lib/types";
import { buildExcerpt } from "../lib/format";

const tanaka = {
  title: "代表取締役",
  name: "田中 透",
  bio: "",
  image: ceoImage
};

function figure(image: ImageMetadata, alt: string, caption: string) {
  return `<figure class="rich-text__figure rich-text__figure--caption-end"><img src="${image.src}" alt="${alt}" width="${image.width}" height="${image.height}" loading="lazy" decoding="async"><figcaption>${caption}</figcaption></figure>`;
}

function article(partial: Omit<NewsArticle, "excerpt">): NewsArticle {
  return {
    ...partial,
    excerpt: buildExcerpt(partial.description || partial.contentHtml, 70)
  };
}

export const mockNews: NewsArticle[] = [
  article({
    id: "livapon-japan-festival-canada-2026-report",
    slug: "livapon-japan-festival-canada-2026-report",
    title: "LIVAPON、JAPAN FESTIVAL CANADA 2026にHeritage Partnerとして参加",
    description:
      "LIVAPONは、2026年8月15日・16日にカナダ・ミシサガ市で開催された「JAPAN FESTIVAL CANADA 2026」にHeritage Partnerとして参加しました。",
    publishedAt: "2026-10-05T00:00:00.000Z",
    categories: [
      { id: "livapon", name: "LIVAPON" },
      { id: "overseas-expansion", name: "海外展開" }
    ],
    eyecatch: jfcaReportCoverImage,
    author: tanaka,
    contentHtml: `
      <p>株式会社CHAIRMANが運営する、日本の職人やものづくりのプレゼンスを世界で高めていくプロジェクト「LIVAPON」は、2026年8月15日・16日にカナダ・ミシサガ市で開催された「JAPAN FESTIVAL CANADA 2026」にHeritage Partnerとして参加しました。</p>
      <p>会場にはLIVAPONのブランドブースを設置し、日本から持ち込んだブランド・商品の展示販売を実施しました。</p>
      <p>また、イベント期間中には、文化交流を目的としたさまざまな企画にも参加・運営しました。</p>
      <h2>ミシサガ市×刈谷市 姉妹都市提携45周年</h2>
      <p>8月15日に行われたオープニングセレモニーでは、開催都市であるカナダ・ミシサガ市と愛知県刈谷市の姉妹都市提携45周年を記念し、LIVAPONよりお祝いの言葉を述べるとともに、日本の工芸品を記念品として寄贈しました。</p>
      <p>寄贈品には、埼玉県の豊田彫刻工房・豊田様よりご提供いただいた木工彫刻を使用。</p>
      <p>日本とカナダを長年つないできた両都市の節目に、日本の職人技を通じて交流する機会となりました。</p>
      <h2>直島町×ティミンズ市 姉妹都市提携45周年記念 書道パフォーマンス</h2>
      <p>香川県直島町とカナダ・ティミンズ市の姉妹都市提携45周年を記念したステージでは、LIVAPONの書道家Yuukaによる書道パフォーマンスを実施しました。</p>
      <p>ステージ上で記念作品を制作し、完成した書道作品を友好の証としてティミンズ市へ寄贈しました。</p>
      <h2>LIVAPON Lucky Drawを開催</h2>
      <p>イベント1日目の夕方には、LIVAPONが企画・運営する「Lucky Draw（大抽選会）」を開催しました。</p>
      <p>LIVAPONが日本から持ち込んだブランド各社より協賛いただいた商品をはじめ、日本での特別な宿泊体験などを景品として用意し、来場者の皆様へプレゼントしました。</p>
      <p>日本の商品を知っていただくだけでなく、その背景にある文化や地域、体験にも触れていただく機会となりました。</p>
      <h2>日本の職人・文化を世界へ</h2>
      <p>今回のJAPAN FESTIVAL CANADA 2026への参加では、日本から商品を持ち込むだけでは分からなかった現地での反応やニーズ、今後の海外展開に向けた課題など、多くの知見を得ることができました。</p>
      <p>LIVAPONでは今後も、日本各地に受け継がれてきた伝統工芸や伝統食品をはじめ、職人の技術、文化、そしてその背景にあるストーリーを世界へ届けていきます。</p>
      <p>日本の職人と世界をつなぎ、その価値が世界で正しく評価される機会を創出してまいります。</p>
      ${figure(jfcaReportBoothImage, "LIVAPONブースの前に並ぶスタッフ", "会場に設置したLIVAPONブース")}
      ${figure(jfcaReportSpeechImage, "オープニングセレモニーでスピーチするLIVAPONの登壇者", "オープニングセレモニーでのスピーチ")}
      ${figure(jfcaReportGiftImage, "木工彫刻の記念品を手にした記念撮影", "記念品の贈呈<br>豊田彫刻工房様よりご提供いただいた木工彫刻")}
      ${figure(jfcaReportCalligraphyImage, "ステージ上で書道作品を制作する書道家Yuuka", "書道家Yuukaによる書道パフォーマンス")}
      ${figure(jfcaReportLuckyDrawImage, "ステージ上で行われたLIVAPON Lucky Drawの様子", "LIVAPON Lucky Draw（大抽選会）の様子")}
    `
  }),
  article({
    id: "livapon-japan-festival-canada-2026",
    slug: "livapon-japan-festival-canada-2026",
    title: "LIVAPONが「Japan Festival CANADA」へ進出",
    description:
      "LIVAPONは、2026年8月15日〜16日にカナダ・トロントで開催される「Japan Festival CANADA2026」へ、Official Japanese Heritage Partnerとして参画し、日本の職人文化を世界へ発信します。",
    publishedAt: "2026-07-16T00:00:00.000Z",
    categories: [
      { id: "livapon", name: "LIVAPON" },
      { id: "overseas-expansion", name: "海外展開" }
    ],
    eyecatch: jfcaCoverImage,
    author: tanaka,
    contentHtml: `
      <p>当社が運営する「LIVAPON」は、本年8月15日〜16日にカナダのトロントで開催される日本文化イベント「Japan Festival CANADA2026」へ進出することが決定しました。</p>
      <p>また、LIVAPONは本イベントのOfficial Japanese Heritage Partnerとして参画します。</p>
      <p>構想段階から日本各地の工房や生産地を訪れ、実際に商品を見て、触れ、職人との対話を通じて、その背景にある歴史や文化に触れてきました。</p>
      <p>大切な文化だからこそ、日本国内だけに留めるのではなく、世界中の日本を愛する人々に知ってもらいたい。</p>
      <p>Japan Festival CANADA2026への進出は、その想いを実現するための大きな一歩です。</p>
      <p>イベントでは、日本の職人技や文化的背景を多くの方に知っていただく機会を創出するとともに、LIVAPONが取り扱う商品や今後展開するサービスについても発信してまいります。</p>
      <p>今後は、日本の伝統技術を職人から直接学び、技術や精神性を体得できる新たなサービスも近日発表予定です。</p>
      <p>LIVAPONは、Japan Festival CANADAのOfficial Japanese Heritage Partnerとして、日本と世界をつなぐ文化の架け橋を目指してまいります。</p>
      <p><a href="https://www.japanfestivalcanada.com/" target="_blank" rel="noopener noreferrer">Japan Festival CANADA公式サイトはこちら</a></p>
    `
  }),
  article({
    id: "livapon-project-release",
    slug: "livapon-project-release",
    title: "日本の伝統文化を世界へ届ける「LIVAPON」をリリースしました",
    description:
      "日本各地に受け継がれてきた伝統文化や職人の技術を、その背景にある歴史とともに世界へ届けるプロジェクト「LIVAPON」をリリースしました。",
    publishedAt: "2026-07-16T00:00:00.000Z",
    categories: [{ id: "livapon", name: "LIVAPON" }],
    eyecatch: livaponOpenImage,
    author: tanaka,
    contentHtml: `
      <p>LIVAPONは、日本の職人が手がけるオーセンティックな商品を厳選し、その背景にある歴史や文化、作り手の想いとともに紹介・販売するキュレーションECサイトです。</p>
      <p>日本には、長い年月をかけて磨かれてきた技術や、地域ごとに受け継がれてきた文化が数多く存在します。一方で、職人の高齢化や後継者不足、認知機会の減少などにより、その価値や歴史が次の世代へ十分に継承されていないという課題もあります。</p>
      <p>LIVAPONでは、単に商品を販売するのではなく、職人の技術、考え方、作品が生まれた土地の歴史まで含めて世界へ伝えることを目指します。</p>
      <p>構想以来、実際に日本各地へ足を運び、商品を見て、触れ、職人との対話を重ねてきました。その中で、日本の職人が持つ繊細な技術力や品質へのこだわりは、世界に誇ることのできる価値であると実感しています。</p>
      <p>今後は商品の販売に加え、日本の職人から直接技術を学び、その技や考え方を体得できる新たなサービスも発表予定です。</p>
      <p>LIVAPONは、日本の文化を商品として消費するのではなく、その背景にある歴史や技術とともに未来へつなぐ存在を目指してまいります。</p>
      <p><a href="https://livapon.com/" target="_blank" rel="noopener noreferrer">LIVAPON公式サイトはこちら</a></p>
    `
  }),
  article({
    id: "biteki-2026-06-koso-life",
    slug: "biteki-2026-06-koso-life",
    title:
      "美容誌『美的スペシャル6月号増刊』にて「KOSOLIFE」の長岡式酵素玄米をご紹介いただきました",
    description:
      "株式会社小学館発行の美容誌『美的スペシャル6月号増刊』にて、弊社が運営する「KOSOLIFE」をタレントの指原莉乃様の美容習慣としてご紹介いただきました。",
    publishedAt: "2026-04-28T00:00:00.000Z",
    categories: [
      { id: "media-coverage", name: "メディア掲載" },
      { id: "koso-life", name: "KOSOLIFE" }
    ],
    eyecatch: bitekiCoverImage,
    author: tanaka,
    contentHtml: `
      <p>このたび、株式会社小学館より発行されている美容誌『美的スペシャル6月号増刊』にて、弊社が運営する「KOSOLIFE」をご紹介いただきましたので、お知らせいたします。</p>
      <h2>掲載概要</h2>
      <p>タレントの指原莉乃様が日頃の美容習慣のひとつとして、「KOSOLIFE」の長岡式酵素玄米を1年以上にわたり継続的にご愛用いただいていることを、誌面の特集にてご紹介いただきました。</p>
      <p>平素より弊社商品をご愛顧くださっている指原様、ならびに掲載の機会をいただきました『美的』編集部の皆さまに、心より御礼申し上げます。</p>
      <h2>弊社の今後の取り組み</h2>
      <p>株式会社CHAIRMANは、伝統的な長岡式酵素玄米の製法を守りながら、現代のライフスタイルに寄り添う食品ブランドとして「KOSOLIFE」を展開しております。今回のメディア掲載を励みに、より多くの方に本物の食を届けるべく、引き続き商品開発・品質向上に努めてまいります。</p>
      <h2>掲載誌情報</h2>
      <ul>
        <li>誌名：美的スペシャル6月号増刊</li>
        <li>発行：株式会社小学館</li>
        <li>発売日：2026年4月22日（水）</li>
        <li>表紙：SANA（TWICE）様</li>
      </ul>
      <p><small>※ 表紙画像は出版元より許諾を得て掲載しております。誌面の内容については本記事に転載しておりません。詳細は誌面をご覧ください。</small></p>
    `
  }),
  article({
    id: "japan-expo-canada-partnership",
    slug: "japan-expo-canada-partnership",
    title:
      "Japan Expo Canada Inc.との戦略的パートナーシップ契約を締結。",
    description:
      "CHAIRMANは、Japan Festival CANADAを主催するJapan Expo Canada Inc.との戦略的パートナーシップ契約を締結しました。",
    publishedAt: "2026-03-11T00:00:00.000Z",
    categories: [
      { id: "partnership", name: "パートナーシップ" },
      { id: "overseas-expansion", name: "海外展開" },
      { id: "livapon", name: "LIVAPON" }
    ],
    eyecatch: jfcStageImage,
    author: tanaka,
    contentHtml: `
      <p>CHAIRMANは、カナダ・トロントにて開催される日本文化の総合博覧会「Japan Festival CANADA（ジャパンフェスティバルカナダ）」を主催するJapan Expo Canada Inc.との間で、戦略的パートナーシップ契約を締結したことをお知らせいたします。</p>
      <h2>パートナーシップ締結の背景と目的</h2>
      <p>当社が推進する地方創生・工芸支援プロジェクト「LIVAPON」は、日本の優れた伝統工芸品や観光資源を世界へ届けるプラットフォームを目指しています。</p>
      <p>この度、北米市場へのゲートウェイとして、トロントを拠点に多大な影響力を持つJapan Expo Canada Inc.と提携いたしました。</p>
      <p>本提携により、Japan Expo Canada Inc.が持つネットワークを通じて、LIVAPONが厳選した日本各地の逸品を北米の富裕層および日本文化ファンへ直接届ける「最短かつ強固な架け橋」が完成します。</p>
      <h2>Japan Festival CANADAについて</h2>
      <p>カナダ・トロントにて開催される、アニメ、食、伝統工芸、技術など多岐にわたる日本文化を網羅した最大級のイベントです。</p>
      <p>現地カナダ人だけでなく、北米全域から多くの日本文化愛好家が集まります。</p>
      <p><a href="https://www.japanfestivalcanada.com/" target="_blank" rel="noopener noreferrer">https://www.japanfestivalcanada.com/</a></p>
    `
  })
];
