export default function({ store, redirect }) {
  console.log(store.getters.checkUserAuth);
  if (!store.getters.checkUserAuth) {
    console.log(store.getters.checkUserAuth);
    redirect("/admin/auth/");
  }
}
