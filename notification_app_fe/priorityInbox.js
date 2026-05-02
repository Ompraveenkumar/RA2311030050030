const apiResponse = {
  "notifications": [
    {
      "ID": "f30c301a-56b2-43b7-b31c-dad4b4d0e621",
      "Type": "Event",
      "Message": "induction",
      "Timestamp": "2026-05-02 05:22:09"
    },
    {
      "ID": "731b2160-a187-42fe-b7e0-21e0891b220c",
      "Type": "Placement",
      "Message": "Berkshire Hathaway Inc. hiring",
      "Timestamp": "2026-05-02 00:22:03"
    },
    {
      "ID": "beb0eca1-5124-4d7f-9e8d-693fb8f3141e",
      "Type": "Event",
      "Message": "cult-fest",
      "Timestamp": "2026-05-02 00:21:57"
    },
    {
      "ID": "866a3ae4-5f6b-406f-87d6-9d3d24c7e97a",
      "Type": "Result",
      "Message": "project-review",
      "Timestamp": "2026-05-01 12:51:51"
    },
    {
      "ID": "d3a004c9-258b-4e96-9018-6f5b87e55aee",
      "Type": "Placement",
      "Message": "TSMC hiring",
      "Timestamp": "2026-05-01 16:51:45"
    },
    {
      "ID": "47e21524-8b75-46e3-af51-99128f06aa7e",
      "Type": "Event",
      "Message": "cult-fest",
      "Timestamp": "2026-05-01 22:51:39"
    },
    {
      "ID": "ec93d26e-e4bd-44f7-957b-e9d4347085ff",
      "Type": "Placement",
      "Message": "Nvidia Corporation hiring",
      "Timestamp": "2026-05-01 17:21:33"
    },
    {
      "ID": "606a7a39-c68d-4e1f-a97a-2642516d306b",
      "Type": "Event",
      "Message": "traditional-day",
      "Timestamp": "2026-05-01 07:21:27"
    },
    {
      "ID": "6b1622bd-7e90-4330-9789-acf8af1da4bd",
      "Type": "Result",
      "Message": "project-review",
      "Timestamp": "2026-05-01 19:21:21"
    },
    {
      "ID": "0b95f843-b0ce-4b67-b13c-5e32c1632ce7",
      "Type": "Placement",
      "Message": "Amgen Inc. hiring",
      "Timestamp": "2026-05-01 21:21:15"
    },
    {
      "ID": "27e1977f-5ff6-4475-a814-fc5a255c1580",
      "Type": "Event",
      "Message": "induction",
      "Timestamp": "2026-05-01 10:51:09"
    },
    {
      "ID": "cad2b701-5c92-4e51-b8c8-e8d1cd8c29b6",
      "Type": "Event",
      "Message": "farewell",
      "Timestamp": "2026-05-01 17:51:03"
    },
    {
      "ID": "be91df5a-417f-4d4e-9726-cd6533949541",
      "Type": "Placement",
      "Message": "Alphabet Inc. Class C hiring",
      "Timestamp": "2026-05-01 20:50:57"
    },
    {
      "ID": "8c87a0c1-0671-4525-aa7a-e26b089a6ffd",
      "Type": "Result",
      "Message": "end-sem",
      "Timestamp": "2026-05-01 19:50:51"
    },
    {
      "ID": "ea023589-11b2-40f2-8ca1-e377a60599e6",
      "Type": "Event",
      "Message": "tech-fest",
      "Timestamp": "2026-05-01 07:50:45"
    },
    {
      "ID": "ba61d9d8-8b81-45fd-9e02-87edcb7284ce",
      "Type": "Placement",
      "Message": "Tesla Inc. hiring",
      "Timestamp": "2026-05-01 20:50:39"
    },
    {
      "ID": "7030011f-c6de-426a-9342-b5414eeb2a49",
      "Type": "Result",
      "Message": "external",
      "Timestamp": "2026-05-01 17:50:33"
    },
    {
      "ID": "f47be249-d39f-43eb-9231-bd7f4e36ffd0",
      "Type": "Placement",
      "Message": "TSMC hiring",
      "Timestamp": "2026-05-01 14:50:27"
    },
    {
      "ID": "e9dc8369-7103-4d85-ac74-e6c34441f4a4",
      "Type": "Event",
      "Message": "farewell",
      "Timestamp": "2026-05-02 00:20:21"
    },
    {
      "ID": "bc0b65f6-a8e8-4072-904b-a97f535d702d",
      "Type": "Placement",
      "Message": "Microsoft Corporation hiring",
      "Timestamp": "2026-05-02 02:50:15"
    }
  ]
};

const priorityMap = {
  Placement: 3,
  Result: 2,
  Event: 1
};

function getTopNotifications(data, n = 10) {
  return data
    .sort((a, b) => {
      if (priorityMap[b.Type] !== priorityMap[a.Type]) {
        return priorityMap[b.Type] - priorityMap[a.Type];
      }
      return new Date(b.Timestamp) - new Date(a.Timestamp);
    })
    .slice(0, n);
}

const topNotifications = getTopNotifications(apiResponse.notifications);

console.log("Top 10 Priority Notifications:");
console.log(topNotifications);
