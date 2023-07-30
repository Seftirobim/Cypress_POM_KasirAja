import { dashboardPage } from "../pages/dashboardPages";
const dashboardPg = new dashboardPage()

beforeEach(() =>{
  dashboardPg.visitDashboard()

})

it('Ensure the menus are displayed', () => {
  dashboardPg.assertDashboard()
});