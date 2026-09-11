import {useRouter} from 'next/router';

const Detail = () => {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <div>
      <h1>Property Detail: {productId}</h1>
    </div>
  );
};

export default Detail;