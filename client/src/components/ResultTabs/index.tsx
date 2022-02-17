import { Tabs } from "react-flatifycss";
import { useDictionary } from "../../contexts/dictionary";
import IntroBox from "../IntroBox";
import Icons from "../Icons";
import TabBody from "./TabBody";
import "./style.scss";

export default function ResultTabs() {
  const { dictionaries } = useDictionary();

  const items = [
    {
      title: "مترادف",
      content: (
        <TabBody postsPerPage={10} dic="motaradef">
          <IntroBox title="مترادف" icon={<Icons.ThreeColumns />}>
            این فرهنگ ارزشمند نوشتهٔ فرج‌الله خداپرستی دربردارندهٔ حجم زیادی از واژگان مترادف و متضاد فارسی است. استفاده
            از این فرهنگ راه خوبی برای تقویت دایرهٔ واژگان است.
          </IntroBox>
        </TabBody>
      ),
      isHidden: !dictionaries.motaradef.active,
    },
    {
      title: "سره",
      content: (
        <TabBody postsPerPage={10} dic="sereh">
          <IntroBox title="سره" icon="">
            با کمک این واژه‌نامه می‌توانید معادل سرهٔ واژگان بیگانه را پیدا کنید.
          </IntroBox>
        </TabBody>
      ),
      isHidden: !dictionaries.sereh.active,
    },
    {
      title: "طیفی",
      content: (
        <TabBody postsPerPage={10} dic="teyfi">
          <IntroBox title="طیفی" icon="">
            فرهنگ طیفی، واژگانی را که به هر نوعی با هم در ارتباط هستند را گرد آورده است. این فرهنگ کمک می‌کند تا واژگانی
            را که نوک زبانتان گیر کرده ولی به خاطر نمی‌آورید به‌سادگی پیدا کنید.
          </IntroBox>
        </TabBody>
      ),
      isHidden: !dictionaries.teyfi.active,
    },
    {
      title: "فرهنگستان",
      content: (
        <TabBody postsPerPage={10} dic="farhangestan">
          <IntroBox title="فرهنگستان" icon="">
            با کمک این فرهنگ می‌توانید برابر فارسی اصطلاحات و کلمات بیگانه را پیدا کنید.
          </IntroBox>
        </TabBody>
      ),
      isHidden: !dictionaries.farhangestan.active,
    },
    {
      title: "گنجور",
      content: (
        <TabBody postsPerPage={4} dic="ganjvar">
          <IntroBox title="گنجور" icon="">
            با استفاده از این فرهنگ می‌توانید نوشته‌های خود را مزین به اشعار فارسی کنید. کافی است واژگان موردنظر و در
            صورت لزوم نام شاعر را وارد کنید تا نتایج مرتبط ظاهر شود.
          </IntroBox>
        </TabBody>
      ),
      isHidden: !dictionaries.ganjvar.active,
    },
  ];

  return <Tabs className="result-tabs" items={items} animation="fade" bordered={true} />;
}
