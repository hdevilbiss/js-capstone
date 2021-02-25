import checkCashRegister from "../js/lib/checkCashRegister";

const CashRegister = ({ object }) => {
  return (
    <div>
      <section>
        <header>
          <h2>
            { object.heading }
          </h2>
        </header>
      </section>
    </div>
  );
}

export default CashRegister;
