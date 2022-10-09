
const Cart = ({isVisible}) => {
	return (
		<div className={` cart ${isVisible && 'show'}`}>
			<h2>Cart</h2>
			<div className="productsCart">
				<div className="productCart">
					<h5>BRAVIA 4K HDR Full Array LED</h5>
					<p className="brand">Sony</p>
					<div className="total">
						<p>1</p>
						<p>Total: <strong>$1099</strong></p>
					</div>
				</div>
				<div className="productCart">
					<h5>BRAVIA 4K HDR Full Array LED</h5>
					<p className="brand">Sony</p>
					<div className="total">
						<p>1</p>
						<p>Total: <strong>$1099</strong></p>
					</div>
				</div>
				<div className="productCart">
					<h5>BRAVIA 4K HDR Full Array LED</h5>
					<p className="brand">Sony</p>
					<div className="total">
						<p>1</p>
						<p>Total: <strong>$1099</strong></p>
					</div>
				</div>
				<div className="productCart">
					<h5>BRAVIA 4K HDR Full Array LED</h5>
					<p className="brand">Sony</p>
					<div className="total">
						<p>1</p>
						<p>Total: <strong>$1099</strong></p>
					</div>
				</div>
				<div className="productCart">
					<h5>BRAVIA 4K HDR Full Array LED</h5>
					<p className="brand">Sony</p>
					<div className="total">
						<p>1</p>
						<p>Total: <strong>$1099</strong></p>
					</div>
				</div>
				<div className="productCart">
					<h5>BRAVIA 4K HDR Full Array LED</h5>
					<p className="brand">Sony</p>
					<div className="total">
						<p>1</p>
						<p>Total: <strong>$1099</strong></p>
					</div>
				</div>
				<div className="productCart">
					<h5>BRAVIA 4K HDR Full Array LED</h5>
					<p className="brand">Sony</p>
					<div className="total">
						<p>1</p>
						<p>Total: <strong>$1099</strong></p>
					</div>
				</div>
				<div className="productCart">
					<h5>BRAVIA 4K HDR Full Array LED</h5>
					<p className="brand">Sony</p>
					<div className="total">
						<p>1</p>
						<p>Total: <strong>$1099</strong></p>
					</div>
				</div>
				<div className="productCart">
					<h5>BRAVIA 4K HDR Full Array LED</h5>
					<p className="brand">Sony</p>
					<div className="total">
						<p>1</p>
						<p>Total: <strong>$1099</strong></p>
					</div>
				</div>
			</div>
			<div className="buttonToBuy">
				<button>
					Buy
				</button>
			</div>
		</div>
	)
}

export { Cart }