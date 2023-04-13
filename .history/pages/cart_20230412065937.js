import Wrapper from "@/components/Wrapper";

export default function Cart() {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="mx-auto mt-8 max-w-[800px] text-center md:mt-0">
          <div className="mb-5 text-[28px] font-semibold leading-tight md:text-[34px]">
            Shopping Cart
          </div>
        </div>

        {/* cart content */}
        <div className="flex flex-col gap-12 py-10 lg:flex-row">
          <div className="flex-[2]">
            <div className="text-lg font-bold">Cart Items</div>
            {cartItems.map((item) => (
              <CartItem key={item.id} data={item} />
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
