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
  + props: planets; dispatch: requestAllPlanets
  + **OrbitalMapItem** (aka PlanetsIndexItem)
    + props: id, name, imageUrl
  + **HostsIndex** (list of 'top' hosts on splash page)

#### PlanetShow
+ props: name, id, description, imageUrl, hosts
+ **HostsIndex**
  + props: hosts; dispatch: requestPlanetHosts, requestBestHosts
  + **HostsIndexItem**
    + props: name, id, imageUrl, router

#### HostShow
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
