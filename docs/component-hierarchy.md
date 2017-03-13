Component Hierarchy
===================

####Splash

####Header Container
+ **Header**
  + props: currentUser; dispatch: logoutUser, guestLogin
  + **Join Container**
    + **Join**
      + props: currentUser; dispatch: signupUser, guestLogin
  + **Login Container**
    + **Login**
      + props: currentUser; dispatch: loginUser, guestLogin

####Footer

####Dashboard
+ **Search Container**
  + **Search**
    + props: planetId, numTravelers, beginDate, endDate; dispatch: requestHosts
+ **OrbitalMap Container**
  + **OrbitalMap**
    + props: planets; dispatch: requestAllPlanets, receiveAllPlanets
    + **PlanetsIndexItems Container**
      + **PlanetsIndexItems**
        + props: name, imageUrl; dispatch: requestSinglePlanet
+ **BestHostsIndex Container**
  + **BestHostsIndex**
    + props: BestHostsIndexItems; dispatch: requestBestHosts, receiveBestHosts
    + **BestHostsIndexItems Container**
      + **BestHostsIndexItems**
        + props: name, imageUrl; dispatch: requestSingleHost

####Planets
+ props: name, description, imageUrl
+ **HostsIndex Container**
  + **HostsIndex**
    + props: HostsIndexItems; dispatch: requestHosts, receiveHosts
    + **HostsIndexItems Container**
      + **HostsIndexItems**
        + props: name, imageUrl; dispatch: requestSingleHost

####HostDetail Container
+ **HostDetail**
  + props: name, bio, imageUrl
+ **RequestForm Container**
  + **RequestForm**
    + props: planetId, numTravelers, beginDate, endDate; dispatch: createRequest
+ **ReviewsIndex Container**
  + **ReviewsIndex**
    + props: reviews; dispatch: requestAllReviews, receiveAllReviews
    + **ReviewsIndexItems Container**
      + **ReviewsIndexItems**
        + props: author, body, rating
+ **ReviewForm Container**
  + **ReviewForm**
    + props: author, body, rating; dispatch: createReview

####AboutIndex
+ **About**
+ **How It Works**
+ **Safety**



Routes
======

| Path | Component |
|------|-----------|
| "/" | "Splash" |
| "/join" | "Join" |
| "/login" | "Login" |
| "/dashboard" | "Dashboard" |
| "/planets/:planet_id" | "Planets" |
| "/planets/:planet_id/hosts/:host_id" | "HostDetail" |
| "/about" | "AboutIndex" |
