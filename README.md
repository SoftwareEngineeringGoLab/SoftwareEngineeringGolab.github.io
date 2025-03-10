# Lab1-Git
A static frontend page, with automatic deployment
The most beautiful travel site in the world
The page is hosted on GitHub Pages, and the deployment is done using GitHub Actions.

# آزمایشگاه نرم‌افزار
## آزمایش اول - گیت

## محتوای نرم‌افزار و راه‌اندازی

این نرم‌افزار در حقیقت یک وبسایت با هدف فراهم کردن اطلاعاتی درباره‌ی مقصدهای مهم گردشگری است. 
در این سایت کاربران می‌توانند لیستی از مقاصد مهم گردشگری به همراه اطلاعات مربوط به هر یک را مشاهده کنند. همچنین گزینه‌ی جست‌و‌جو در بین مقاصد نیز وجود دارد و کاربران می‌توانند با وارد کردن بخشی از اسم شهر، اطلاعات مربوط به آن را ببینند. همچنین می‌توان با جست‌و‌جوی اسم کشور، اسم شهرهایی که در آن کشور مقصد خوبی برای سفر هستند را دید.

برای اجرای این نرم‌افزار به روش زیر عمل کنید:

1. ابتدا پروژه را از گیت‌هاب با استفاده از دستور زیر کلون کنید:
    ```
    git clone https://github.com/SoftwareEngineeringGoLab/SoftwareEngineeringGolab.github.io.git
    ```

2. سپس وارد پوشه‌ی پروژه شده و دستورات زیر را اجرا کنید:
    ```
    cd travel-destination-guide
    npm install
    npm run dev
    ```

3. سپس وارد مرورگر خود شوید و به آدرس `http://localhost:5173` بروید.


## پاسخ به پرسش‌ها

1.     پوشه‌ی .git چیست؟ چه اطلاعاتی در آن ذخیره می‌شود؟ با چه دستوری ساخته می‌شود؟
پوشه‌ی .git پوشه‌ای است که در دایرکتوری پروژه‌ی گیت قرار دارد و اطلاعات مربوط به تاریخچه‌ی پروژه و تنظیمات گیت در آن ذخیره می‌شود. این پوشه وقتی که دستور `git init` را اجرا می‌کنیم ساخته می‌شود.   

2. منظور از atomic بودن در atomic commit و atomic pull-request چیست؟
   اتمیک بودن یعنی اینکه یک عملیات یا تغییر خاص باید به صورت کامل و یکجا انجام شود و نباید به دو یا چند بخش تقسیم شود. در گیت اتمیک بودن به این معناست که یک commit یا یک pull-request باید یک تغییر خاص را اعمال کند و نباید شامل چند تغییر مختلف باشد.

3. تفاوت دستورهای fetch و pull و merge و rebase و cherry-pick را بیان کنید.
دستور fetch اطلاعات از remote repository را به local repository می‌آورد و اطلاعات را در local repository به‌روز می‌کند. دستور pull اطلاعات از remote repository را به local repository می‌آورد و اطلاعات را در local repository به‌روز می‌کند و همچنین تغییرات را در working directory اعمال می‌کند. دستور merge تغییرات یک branch را با branch فعلی merge می‌کند. دستور rebase تغییرات یک branch را با branch فعلی rebase می‌کند. دستور cherry-pick یک commit خاص را از یک branch به branch فعلی انتقال می‌دهد.
   
4. تفاوت دستورهای reset و revert و restore و switch و checkout را بیان کنید.
   دستور reset تغییرات یک commit را از branch فعلی حذف می‌کند. دستور revert یک commit خاص را از branch فعلی revert می‌کند. دستور restore تغییرات یک فایل خاص را به حالت قبلی برمی‌گرداند. دستور switch branch فعلی را به branch دیگری تغییر می‌دهد. دستور checkout branch فعلی را به branch دیگری تغییر می‌دهد و همچنین می‌تواند به commit خاصی هم switch کند.   

5. منظور از stage یا همان index چیست؟ دستور stash چه کاری را انجام می‌دهد؟
   در گیت stage یا index مرحله‌ای است که قبل از commit کردن تغییرات، تغییرات به آن اضافه می‌شوند.
دستور stash تغییراتی که در working directory انجام داده‌ایم را در یک stack ذخیره می‌کند تا بتوانیم بعداً آن‌ها را به working directory برگردانیم (با استفاده از دستورات git stach push, pop)

6. مفهوم snapshot به چه معناست؟ ارتباط آن با commit چیست؟
   در گیت هر commit یک snapshot از وضعیت فایل‌ها در زمان commit است. یعنی هر commit یک snapshot از فایل‌ها در زمان commit است.   

7. تفاوت‌های local repository و remote repository چیست؟
ریپازیتوری لوکال مخزنی است که در کامپیوتر شخصی ما قرار دارد و روی آن کار می‌کنیم. ریپازیتوری ریموت مخزنی است که در یک سرور قرار دارد و ما از آن برای همکاری با دیگران استفاده می‌کنیم.
