<section class="ezy__contact11 light">
	<div class="ezy__contact11-bg-holder"
		style="background-image: url(https://cdn.easyfrontend.com/pictures/contact/contact_11.png);">
		<div class="container">
			<div class="row py-4 justify-content-between">
				<div class="col-lg-4 mb-5 mb-lg-0">
					<h2 class="ezy__contact11-title mb-3 mt-0 text-white">Get in Touch</h2>
					<p class="ezy__contact11-sub-heading mb-0 text-white">It’s easier to reach your savings goals
						when you have the right savings account. Take a look and find the right one for you!</p>
				</div>
				<div class="col-lg-5">
					<div class="card ezy__contact11-form-card">
						<div class="card-body p-md-5">
							<h2 class="ezy__contact11-heading mb-3">Contact Us</h2>
							<p class="ezy__contact11-sub-heading mb-5">We list your menu online, help you process
								orders.</p>

							<form>
								<div class="form-group mb-3 mt-2">
									<input type="text" class="form-control" placeholder="Enter Name" />
								</div>
								<div class="form-group mb-3 mt-2">
									<input type="email" class="form-control" placeholder="Enter Email" />
								</div>
								<div class="form-group mb-3">
									<textarea name="message" class="form-control" placeholder="Enter Message"
										rows="3"></textarea>
								</div>
								<div class="text-end">
									<button type="submit" class="btn btn-primary ezy__contact11-btn">Submit</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="ezy__contact11-blank-card"></div>
</section>

<style>
.ezy__contact11 {
	/* Bootstrap variables */
	--bs-body-color: #28303b;
	--bs-body-bg: rgb(255, 255, 255);

	/* Easy Frontend variables */
	--ezy-theme-color: rgb(13, 110, 253);
	--ezy-theme-color-rgb: 13, 110, 253;
	--ezy-form-card-bg: #F4F7FD;
	--ezy-form-card-innor-bg: #ffffff;
	--ezy-form-card-shadow: none;

	background-color: var(--bs-body-bg);
}

/* Gray Block Style */
.gray .ezy__contact11,
.ezy__contact11.gray {
	/* Bootstrap variables */
	--bs-body-bg: rgb(246, 246, 246);

	/* easy frontend variables */
	--ezy-form-card-bg: #ececee;
	--ezy-form-card-innor-bg: #f6f6f6;
	--ezy-form-card-shadow: none;
}

/* Dark Gray Block Style */
.dark-gray .ezy__contact11,
.ezy__contact11.dark-gray {
	/* Bootstrap variables */
	--bs-body-color: #ffffff;
	--bs-body-bg: rgb(30, 39, 53);

	/* Easy Frontend variables */
	--ezy-form-card-bg: #263140;
	--ezy-form-card-innor-bg: #273648;
	--ezy-form-card-shadow: none;
}

/* Dark Block Style */
.dark .ezy__contact11,
.ezy__contact11.dark {
	/* Bootstrap variables */
	--bs-body-color: #ffffff;
	--bs-body-bg: rgb(11, 23, 39);

	/* Easy Frontend variables */
	--ezy-form-card-bg: #1c293a;
	--ezy-form-card-innor-bg: #162231;
	--ezy-form-card-shadow: none;
}



.ezy__contact11-bg-holder {
	background-repeat: no-repeat;
	background-position: bottom left;
	background-size: cover;
	padding: 60px 0;
}

.ezy__contact11-title {
	font-weight: bold;
	font-size: 25px;
	line-height: 25px;
}

@media (min-width: 768px) {
	.ezy__contact11-title {
		font-size: 40px;
		line-height: 40px;
	}
}

.ezy__contact11-heading {
	font-weight: bold;
	font-size: 25px;
	line-height: 25px;
	color: var(--bs-body-color);
}

@media (min-width: 768px) {
	.ezy__contact11-heading {
		font-size: 45px;
		line-height: 45px;
	}
}

.ezy__contact11-sub-heading {
	font-size: 18px;
	line-height: 25px;
	color: var(--bs-body-color);
}

.ezy__contact11-form-card {
	background-color: var(--ezy-form-card-bg);
	border: none;
	box-shadow: var(--ezy-form-card-shadow);
	border-radius: 15px;
	padding: 25px;
	margin-bottom: -200px !important;
}

.ezy__contact11-form-card .card-body {
	background-color: var(--ezy-form-card-innor-bg);
	border-radius: 15px;
}

.ezy__contact11-blank-card {
	height: 200px;
}

.ezy__contact11 .form-control {
	min-height: 48px;
	line-height: 40px;
	border-color: transparent;
	background: rgba(163, 190, 241, .14);
	border-radius: 10px;
	color: var(--bs-body-color);
}

.ezy__contact11 .form-control:focus {
	border-color: #86b7fe;
	box-shadow: none;
}

.ezy__contact11-btn {
	padding: 12px 30px;
	color: #ffffff;
	background-color: var(--ezy-theme-color);
	border-color: var(--ezy-theme-color);
}

.ezy__contact11-btn:hover {
	background-color: rgba(var(--ezy-theme-color-rgb), .9);
	border-color: rgba(var(--ezy-theme-color-rgb), .9);
	color: #ffffff;
}
</style>