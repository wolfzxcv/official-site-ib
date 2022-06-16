# WCG Markets IB website

- [正式環境](https://www.wcgpartner.com/)
- [測試環境](http://18.163.183.177/)

## 運行方式

1. 請先安裝 **[Node](https://nodejs.org/en/download/)**
2. 把專案抓下來
3. `npm i`
4. `npm run dev`
5. 預設會運行在 **[http://localhost:3100](http://localhost:3100)**

## 佈署方式

1. 使用 docker: 根目錄下已有 Dockerfile
2. 使用 node: 詳細運行方式寫在 Dockerfile 裡面

## 設定懶人包

設定以下項目,各自對應的設定檔案(或檔案位置)

- 導覽列
  - src\assets\menuList.ts
- 連結
  - src\assets\links.ts
- 多國語言
  - src\i18n\config.ts (編輯下拉選單的語言選項)
  - next-i18next.config.js (編輯 router 網址對應的語言有哪些,預設語言是什麼)
  - src\i18n\localests (編寫多國語檔案)
  - src\i18n\generateLocales.js (執行這個檔案,即可將 src\i18n\localests 內編輯的所有 ts 檔案,自動產出 src\i18n\locales 內的 json 檔案)

## 導覽列設定

導覽列的所有連結,是在**menuList.ts**設定 (手機版/電腦版,導覽列都會使用這支檔案)
![](https://i.imgur.com/idIzal0.jpg)

每個連結,包含"名稱"及"對應的連結", **{ i18n: '名稱', href: '對應的連結' }**

```javascript=
[
  {
    i18n: 'home', // 主頁
    href: '/'
  },
  {
    i18n: 'feature', // 優勢
    href: '/feature'
  },
  {
    i18n: 'agent', // 代理類型
    href: '/agent'
  },
  {
    i18n: 'promotion', // 推廣工具
    href: '/promotion'
  },
  {
    i18n: 'activity', // 促銷活動
    href: '/activity'
  },
  {
    i18n: 'contact', // 聯繫方式
    href: '/contact'
  }
]
```

我們嘗試把不要的連結註解掉(如上方編輯器的截圖),存檔後,重新運行,即可看到以下結果
![](https://i.imgur.com/U3pzt4K.jpg)

- 只要從**menuList.ts**更改設定,就能改變導覽列,不需要修改導覽列頁裡面的程式碼,不會影響樣式

## 多國語言設定

![](https://i.imgur.com/Oczyhdd.jpg)

### 設定顯示語言的選項們

需要動到的檔案有兩個: **next-i18next.config.js**以及**locales.ts**

- [請依照 ISO 碼命名](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)

## 開發相關

### 開發工具

請先安裝 **[Visual Studio Code](https://code.visualstudio.com/download)**
請先安裝 **[Node](https://nodejs.org/en/download/)**

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Chakra UI](https://chakra-ui.com/)
- [next-i18next](https://github.com/isaachinman/next-i18next)
- [commitizen](https://github.com/commitizen/cz-cli#making-your-repo-commitizen-friendly)

```diff
- 此專案使用 commitizen
- 請做全域安裝 `npm install commitizen -g`
- 每次commit,請在stage之後,下指令 `git cz`,然後照指示輸入
- 要佈署之前,下指令`npm run release`,即會自動計算,並更新package.json裡面的version
```

這樣佈署後,可以在 head 標籤裡面,看到版本.
![](https://i.imgur.com/m5vho4w.jpg)

### 環境變數

- NEXT_PUBLIC_REGISTER_REAL
  - 開立真實帳戶
- NEXT_PUBLIC_USERS_CENTER
  - 客戶中心
- NEXT_PUBLIC_USERS_CENTER_ZH
  - 客戶中心(中文)

### 活動頁面

- 路徑命名為 activity/活動名稱

  - 新增檔案在 src\pages\activity 底下
  - 新增圖片在 public\assets\images 底下, 圖片命名方式為 activity*活動名稱*圖片名稱
  - 用以上方式命名, 將來若想刪除已經過時的活動相關頁面及檔案, 維護會較容易

- 目前活動頁面們(依照開發順序陳列)

  - [WCG6DL](https://www.wcgpartner.com/activity/WCG6DL)

- 新活動改放在首頁 banner
