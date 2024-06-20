import CardsArea from '../components/cardsArea';

export default function CardsFetch({ cards, filterOption,sortOption,month,searchKey }) {
    <getServerSideProps searchKey={searchKey} filterOption={filterOption} sortOption={sortOption} month={month} />
  return <CardsArea cards={cards} />;
}

export async function getServerSideProps({filterOption,sortOption,month,searchKey}) {
  try {

    const response = await fetch(`/api/cards?location=${filterOption}&sort=${sortOption}&month=${month}&search=${searchKey}`);
    if (!response.ok) {
      throw new Error('Failed to fetch cards');
      console.log("failed");
    }
    const cards = await response.json();
    console.log(cards)
    return {
      props: {
        cards
      }
    };
  } catch (error) {
    console.error('Error fetching cards:', error);
    return {
      props: {
        cards: [] // Return an empty array or handle error as per your requirement
      }
    };
  }
}
