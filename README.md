# Blog Website App

Sideland : **## Blog Website Application**

> ### Overview :

- Finds informations about topics you like, stay update to the last trends of the markets, open source topics for you knowledge.

## Interest

You really do, want to understand about:

- -@reduxjs/toolkit is a feature of `react-redux` that simplify state management over **functions** or **variables** that changes state in our mounted components during their lifecycle.

- -{useDispatch, useSelector} from `react-redux`
- > `useDispatch` allows to set change of functions encompasses in reducer file (userSlice.js) into others local components that need to change state of any `initialState` properties coming from reducer file storage via store file (store.js).
- > useSelector enable to get state of any `initialState` properties from reducer file (userSlice.js) and print them to specifics components that need to.

### Links

- Solution URL: [https://github.com/BeinRain06/blog-website.git](https://github.com/BeinRain06/blog-website.git)
- Live Site URL: [https://beinrain06.github.io/blog-website/](https://beinrain06.github.io/blog-website/)

## Description : \* challenge issue

- i faced difficulty to fetch data using **async/await** with `axios` library as i was doing it with a looks like syntax of **fetch api** :

  - const fetchData = async () => {
    try {
    const response =
    await axios
    .get(url)
    .then((response) => (
    dispatch(setBlogData(response.data));
    setBlogs(response.data);
    console.log(response.data);
    setLoading(false);
    ));  
     } catch (error) {
    console.log(`error:${error}`);
    }
    };
    **instead** of writing **this**:
  - const fetchData = async () => {
    try {
    const response = await axios.get(url);

        dispatch(setBlogData(response.data));
          setBlogs(response.data);
        console.log(response.data);
        setLoading(false);

    } catch (error) {
    console.log(`error:${error}`);
    }
    };

- i was also in trouble when encountering error **429** zith `axios` **too many request** because i was calling many
  `response.data`in many function (dispatch, console.log, setBlogs, ).
  I figure out that to avoid this error i need to call `response.data` just in one function to now use it to be available for our fetching. Like this :

  - const fetchData = async () => {
    try {
    const response = await axios.get(url);
    dispatch(setBlogData(response.data));
    } catch (error) {
    console.log(`error:${error}`);
    }
    };

i also omit to map `articles` property of Gnews API after fetching data writing:

- { blogData?.map((insisData, index) => {...})}
  **instead** of :
- { blogData?.articles?.map((insisData, index) => {...})}
  and i got the error: **blogData is not a function**

## CSS Structures:

> - <App/> Component , three main components :
>
> -<Navbar/> -<HomePage/> -<BlogPage/>

**Picture**

---

![./Desktop-ToDoList-App.png](./Desktop-ToDoList-App.png)

---

# What I learned

### React Hook Enhanced

**_@reduxjs/toolkit_** a feature of react-redux that manages state instead of using useContext API. Easy to proceed react-redux such similar in ideas with useContext Hool API achieves implementation of managed state in two main steps.
The First one is: -**To create** a function called reducer using **createSlice** to operate on whichh kind of variables we need to pass as properties in or to set any function that change thes variables through time in the life cycle of our components

> Here we have 4 level of actions in our **useSlice.js** file to:

- **import** `createSlice` from @reduxjs/toolkit
- >
-
- **initialize** our info-base to share `const userSlice = createSlice()`
- **populate our properties** inside `createSlice()`
  - e.g:
    > -name : "user", // _the name of reducer_
    > -initialState: {
    > isSignedIn: false, // _initialize each property that will change during the render of our page by set actions_
    > ...
    > },
    > -reducers : {
    > setIsSignedIn: (state, action) => {
    > state.isSignedIn = action.payload; // _function that perform change_
    > },
    > ...
    > }

>

- **export** of functions that **set change**

  - e.g:
  - export const { setIsSignedIn, setSearchInput, setBlogData, setUserData } =
    userSlice.actions;

>

- **export** of functions that **get change**
  - e.g:
  - export const selectBlogData = (state) => {
    return state.user.blogData; };

The second on is:

- **To store** our managed data using **configureStore** in such a way that every components in need to access our data will refer to the place where it is stored in purpose to be accessible for multiple components.

>

**_react-redux_** @reactjs/toolkit functions or variables changing can't be applied directly into differents components requesting these settle changes. To succeedm access has to be done by using two proper features of his parent `react-redux` that are `useDispatch`and `useSelector`

> `useDispatch` will help us define a **functions** that enables to set the current changes being occured by many actions triggered in each of our component involved in the process of changing his content in some way.
>
> - e.g:
> - const dispatch = useDispatch();
> - const login = () => {

      console.log(data);
      dispatch(setBlogData(data));
      dispatch(setIsSignedIn(true));
      };

> `useSelector` helps us define **variables** that get `current state`of our properties inside reducer file (userSlice.js) from our store file (store.js) to display or return in any components that are in desire.
>
> - e.g:
> - const blogData = useSelector(selectBlogData);

### javaScript Enhanced

- **map()** method javascript returns a new Array with value passed as argument when looping at an array

  > e.g: blogData.map((insideData) => (...));

### utilities Materials:

    -Materials icons [https://mui.com/material-ui/material-icons/](https://mui.com/material-ui/material-icons/)

### Mobile Responsiveness

    - Mobile reponsiveness for mobile max-width: 475px ,max-width: 715px,

**Picture**

---

![./Mobile-ToDoList-App.png](./Mobile-ToDoList-App.png)

---

## Callback History:

- Age of internet. is it newspaper still on demand.
- Yeah it is and it is beautiful to read article made in pieces of wood filled with anchor, most people also with the interconnection of people trend and achieves most bi informing at a greatest scale the people that share some passions about many topics and also want to grow their knowledges about features they don't usually see but are aware of their existences.
- Blog Website nowadays, everyone can create one, the duty is to share something and connect with people that have something to do with your information. Informations valuable depends on the time and th analysis of their truthness or effect in practice, world of net is growing and many bloggers comes outside.
- This blog website is a blog sharing information info fetched from a public API Gnews API, for our purpose to design example of Blog for you.

**2015**. \__React Stable..._, `react-redux` was released by **Dan Abramov** and **Andrew Clark**
under the copyright of **facebook**

## Useful Resources :

PedroTech Youtbe : ['ReactJS Course[14]- Redux Toolkit Tutorial'] : allows to me to have an intro in react-redux and reduxjs/toolkit
to stand it on our project.

## Acknowledge:

This project always remember the Team :

-PedroTech: enlight our understanding of @reduxjs/toolkit feature.

-Sufa Digital: udemy with his light how to achieve our project

## Author

- Frontend Mentor - [https://www.frontendmentor.io/profile/BeinRain06](https://www.frontendmentor.io/profile/BeinRain06)
- Twitter - [https://twitter.com/nest_Ngoueni](https://twitter.com/nest_Ngoueni)
