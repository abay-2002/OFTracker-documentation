---
sidebar_position: 5
---

# Tracking a season

Let's learn how to **track** your individual **member** **indebt**, Since the main purpose of the **OFTracker** is to track your **organisation member** individual **organisation indebt**.

## Organisation details page

Recall from the [season](http://localhost:3000/docs/admin-features/season#season-running) documentation section page [this](#organisation-details-page) is how your **organisation details** page might look like:

<img src="/img/docs-img/tracking-a-season/tracking-a-season-1.jpg" id="organisation-details-page"/>

Well.. basically since your main job as **organisation admin** is just to wait for your **member** to pay their **individual indebt**, you could pretty easily **track** who's already paid its **indebt** and those who haven't paid its **indebt** on [people](#people-section) section via the [organisation details](#organisation-details-page) page.

<img src="/img/docs-img/tracking-a-season/tracking-a-season-2.jpg" id="people-section"/>

Quite simple and frankly straightforward right? now let's see what information we could have in the [organisation details](#organisation-details-section) section.

### Organisation details section

As you can see inside of the [organisation details](#organisation-details-section-image) section we could **track** the current **summary** of our **organisation** **cash goal**:

<img src="/img/docs-img/tracking-a-season/tracking-a-season-3.jpg" id="organisation-details-section-image"/>

Here's a brief explaination for each of those futures above:

- **Admin Id** is the **id** of **admin** of your **organisation** which is taken from your **account** **user id**.
- **Organisation Id** is a **unique** **Id** of your **organisation**, it can be use for **user** when they want to sent a join request to your **organisation** from the **user member** side.
- **Season** it's showing you the current **running** **season** in your **organisation**.
- **Goal** is the **organisation cash goal** for the current **running season** of your **organisation**.
- **Gathered** is the **total** amount of how many **cash** you've gathered from your **member individual indebt**.
- **Drawback** is the **total** remaining amount of how many **cash** it left to reach your **cash goal**.

### Transactions

Odds is you'll want to see the **record** of the **transactions** happened in the past, you could easily do this by going to the **organisation transaction** page by clicking the `History` button located in the [transaction](#transaction-section) section on **organisation details** page.

<img src="/img/docs-img/tracking-a-season/tracking-a-season-4.jpg" id="transaction-section"/>

Once you successfully on the [organisation transaction page](#organisation-transaction), you'll notice the page might looks like [this](#organisation-transaction):

<img src="/img/docs-img/tracking-a-season/tracking-a-season-5.jpg" id="organisation-transaction"/>

Notice the ***There's no transaction yet*** status, it's happen because there's no any **member** ever paid for their **organisation individual indebt** yet.

### Paying member

Let's say there's a **member** want to pay its **indebt** and as **organisation admin** the question is how do i know if there's a **member** **paying** its **indebt**? well in that case you'll get the **notification** in the [general notifications section](#general-notifications-section) like below:

<img src="/img/docs-img/tracking-a-season/tracking-a-season-6.jpg" id="general-notification-section"/>

Notice there's an `Accept` or `Decline` button, it's your responsibility as **admin** to decide whether to **accept** those **member** **payment** or **decline** its **payment**, 

In case if you want to see the detailed information about that **paying** **member** you could easily **search** that detailed information about that paying **member** on **search** input field located in the [people section](#search-people-section) by inputing its **member id**.

<img src="/img/docs-img/tracking-a-season/tracking-a-season-7.jpg" id="search-people-section"/>

Once you inputed that **member id**, it'll show that **member** detailed information based from its **member id**.

### Decline member payment

In some case you would want to **decline** your **paying member** **payment**, so what happen if i **decline** my **member indebt payment** request?

Here's what happen if i **decline** my **member indebt payment request**:
- That **member** will get a **notification**, that you're just **decline** its **payment request**.
- That **member** **indebt** would stay the same **amount** as before he sent that **payment request**.
- Your **organisation drawback** wont be changed.
- Your **organisation gathered** wont be changed.
- That **member** still could make a **payment request** as long as the **season** is still **running**.

### Accept member payment

And in some case you'll want to **accept** your **member payment request**.

Here's what happen if i **accept** my **member indebt payment request**:
- Certainly those **member indebt** total amount, would be **decreased** by how much those **member** **paid**.
- Your **organisation cash gathered** would **increased** by how much those **member** **paid**.
- Your **organisation cash drawback** would **decreased** by how much those **member** **paid**.
- **OFTracker** will determine whether those **member** have completed their **indebt** or haven't by assigning it into their **status** on [people section](#people-section-status), if those **member** completed their **payment** then its **status** will change to **achieved** but if their **haven't** yet completed their **indebt** then they will have an **indebt** status, you can see those scenario example [here](#scenario).

<img src="/img/docs-img/tracking-a-season/tracking-a-season-8.jpg" id="scenario"/>

Quite simple and pretty straightforward right?