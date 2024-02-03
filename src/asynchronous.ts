const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Data isFetch";
    if (data) {
      resolve(data);
    } else {
      reject(`Failed to fetch`);
    }
  });
};

const getPromiseData = async (): Promise<void> => {
  const data = await makePromise();
  console.log(data);
};

// type alias promise
type makePromise = {
  data: string;
};

const makePromiseTypeAlias = (): Promise<makePromise> => {
  return new Promise<makePromise>((resolve, reject) => {
    const data: makePromise = { data: "Data isFetch" };
    if (data) {
      resolve(data);
    } else {
      reject(`Failed to fetch`);
    }
  });
};

const getPromiseDataTypeAlias = async (): Promise<makePromise> => {
  const data = await makePromiseTypeAlias();
  return data;
};

getPromiseDataTypeAlias();

// json place holder data fetch

interface ITodo {
  id: number;
  slug: string;
  url: string;
  title: string;
  content: string;
  image: string;
  thumbnail: string;
  status: string;
  category: string;
  publishedAt: string;
  updatedAt: number;
  userId: number;
}

const getTodo = async (): Promise<ITodo> => {
  const response = await fetch("https://jsonplaceholder.org/posts/1");
  const data = await response.json();
  return data;
};

const getTodoData = async (): Promise<void> => {
  const result = await getTodo();
  console.log(result);
};

// getTodoData();
