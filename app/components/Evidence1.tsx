import React from "react";
import E1sub from "./E1sub";

interface Section1Props {
  id: string;
}
const cardsData = [
  {
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget massa lorem. Nulla facilisi. Aliquam erat volutpat. Sed eget mauris a enim suscipit suscipit. Sed vitae lectus leo. Aenean auctor purus vel justo maximus egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse ac ipsum nec elit volutpat feugiat in vel ex. Integer condimentum, quam eget iaculis consectetur, massa nulla fringilla lectus, ut bibendum quam ipsum eu sapien. Aliquam sagittis lectus ac nisi congue, at dictum sapien pulvinar. In sodales suscipit ipsum, a interdum neque pretium sit amet.",
  },
  {
    paragraph:
      "Fusce sit amet ante eget orci lobortis interdum eu et sapien. In vel pretium velit. Vivamus dictum nunc a magna elementum scelerisque. Nullam sed augue faucibus, gravida nisi vitae, malesuada tellus. Donec eu eleifend metus. Praesent vitae sollicitudin elit. Donec venenatis mauris augue, eget tristique lectus scelerisque eu. Duis euismod ultricies semper. Nam in hendrerit lacus. Morbi non finibus risus, ut ullamcorper orci. Aliquam gravida convallis neque, in imperdiet mi consectetur quis.",
  },
  {
    paragraph:
      "Praesent ut turpis vel libero pellentesque feugiat in ac elit. Nulla ultricies ex nec urna lobortis, eu placerat libero consectetur. Integer varius interdum libero, id auctor odio eleifend et. Suspendisse nec velit semper, varius lacus eget, scelerisque ex. Nullam tempor mauris nec bibendum tristique. Sed eget est risus. Maecenas sed aliquam urna. Duis ac leo hendrerit, facilisis metus vitae, vulputate nibh. Vivamus vitae consequat risus. Sed ullamcorper, quam eget dignissim commodo, odio ex dictum enim, sit amet tristique eros metus eget ante.",
  },
];

function Evidence1({ id }: Section1Props) {
  return (
    <section id={id}>
      <E1sub />
    </section>
  );
}

export default Evidence1;
