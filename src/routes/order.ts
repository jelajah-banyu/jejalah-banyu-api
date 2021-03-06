import ApiRouter from "./ApiRouter";
import * as OrderController from "../controllers/OrderController";
import auth from "../middleware/authentication";

const router = new ApiRouter();

router.post("/accept", auth, OrderController.setAcceptedOrder);
router.post("/reject", OrderController.setRejectedOrder);
router.post("/paid", OrderController.setPaidOrder);
router.get("/owner", auth, OrderController.showToOwner);
router.get("/transaction", auth, OrderController.getTransaction);
router.resource(OrderController)
  .middlewareResource({
    store: [auth],
    show: [auth],
    index: [auth]
  });
router.executeResource();

export default router;
