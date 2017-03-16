Component Hierarchy
===================

#### Splash

#### Header
+ props: currentUser; dispatch: logoutUser, guestLogin
+ **Join**
  + props: currentUser; dispatch: signupUser, guestLogin
+ **Login**
  + props: currentUser; dispatch: loginUser, guestLogin

#### Footer

#### Dashboard
+ **Search**
  + props: planetId, numTravelers, beginDate, endDate; dispatch: requestHosts
+ **OrbitalMap** (aka PlanetsIndex)
  + props: planets; dispatch: requestAllPlanets, receiveAllPlanets
  + **OrbitalMapItems** (aka PlanetsIndexItems)
    + props: id, name, imageUrl; dispatch: requestSinglePlanet
+ **BestHostsIndex**
  + props: BestHostsIndexItems; dispatch: requestBestHosts, receiveBestHosts
  + **BestHostsIndexItems**
    + props: name, imageUrl; dispatch: requestSingleHost

#### PlanetShow
+ props: name, description, imageUrl, hosts
+ **HostsIndex**
  + props: HostsIndexItems; dispatch: requestHosts, receiveHosts
  + **HostsIndexItems**
    + props: name, imageUrl; dispatch: requestSingleHost

#### HostDetail
+ props: name, bio, imageUrl
+ **RequestForm**
  + props: planetId, numTravelers, beginDate, endDate; dispatch: createRequest
+ **ReviewsIndex**
  + props: reviews; dispatch: requestAllReviews, receiveAllReviews
  + **ReviewsIndexItems**
    + props: author, body, rating
+ **ReviewForm**
  + props: author, body, rating; dispatch: createReview

#### AboutIndex
+ **About**
+ **How It Works**
+ **Safety**



Routes
======

| Path | Component |
|------|-----------|
| "/" | "App" |
| "/dashboard" | "Dashboard" |
| "/planets/:planet_id" | "Planets" |
| "/planets/:planet_id/hosts/:host_id" | "HostDetail" |
| "/about" | "About" |
| "/howitworks" | "HowItWorks" |
| "/safety" | "Safety" |
