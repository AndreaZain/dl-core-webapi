var v1BuyerRouter = require('../src/routers/v1/master/buyer-router');
var v1GarmentBuyerRouter = require('../src/routers/v1/master/garment-buyer-router');
var v1SupplierRouter = require('../src/routers/v1/master/supplier-router');
var v1GarmentSupplierRouter = require('../src/routers/v1/master/garment-supplier-router');
var v1ProductRouter = require('../src/routers/v1/master/product-router');
var v1GarmentProductRouter = require('../src/routers/v1/master/garment-product-router');
var v1ProductByIdRouter = require('../src/routers/v1/master/product-by-id-router');
var v1UoMRouter = require('../src/routers/v1/master/uom-router');
var v1UnitRouter = require('../src/routers/v1/master/unit-router');
var v1CategoryRouter = require('../src/routers/v1/master/category-router');
var v1GarmentCategoryRouter = require('../src/routers/v1/master/garment-category-router');
var v1CurrencyRouter = require('../src/routers/v1/master/currency-router');
var v1VatRouter = require('../src/routers/v1/master/vat-router');
var v1BudgetRouter = require('../src/routers/v1/master/budget-router');
var v1UnitNiRouter = require('../src/routers/v1/master/division-router');
var v1MachineRouter = require('../src/routers/v1/master/machine-router');
var v1UsterRouter = require('../src/routers/v1/master/uster-router');
var v1SpinningProductionLotRouter = require('../src/routers/v1/master/spinning-production-lot-router');
var v1ThreadSpecificationRouter = require('../src/routers/v1/master/thread-specification-router');
var v1StepRouter = require('../src/routers/v1/master/step-router');
var v1InstructionRouter = require('../src/routers/v1/master/instruction-router');
var v1UploadUomRouter = require('../src/routers/v1/master/upload-uom-router');
var v1UploadBuyerRouter = require('../src/routers/v1/master/upload-buyer-router');
var v1UploadGarmentBuyerRouter = require('../src/routers/v1/master/upload-garment-buyer-router');
var v1UploadSupplierRouter = require('../src/routers/v1/master/upload-supplier-router');
var v1UploadGarmentSupplierRouter = require('../src/routers/v1/master/upload-garment-supplier-router');
var v1UploadProductRouter = require('../src/routers/v1/master/upload-product-router');
var v1UploadGarmentProductRouter = require('../src/routers/v1/master/upload-garment-product-router');
var v1UploadVatRouter = require('../src/routers/v1/master/upload-vat-router');
var v1UploadBudgetRouter = require('../src/routers/v1/master/upload-budget-router');
var v1UploadCurrencyRouter = require('../src/routers/v1/master/upload-currency-router');
var v1UploadDivisionRouter = require('../src/routers/v1/master/upload-division-router');
var v1UploadCategoryRouter = require('../src/routers/v1/master/upload-category-router');
var v1UploadGarmentCategoryRouter = require('../src/routers/v1/master/upload-garment-category-router');
var v1UploadUnitRouter = require('../src/routers/v1/master/upload-unit-router');
var v1LampStandardRouter = require('../src/routers/v1/master/lamp-standard-router');
var v1PowerBiRouter = require('../src/routers/v1/core/power-bi-router');
var v1ProcessTypeRouter = require('../src/routers/v1/master/process-type-router');
var v1OrderTypeRouter = require('../src/routers/v1/master/order-type-router');
var v1MachineTypeRouter = require('../src/routers/v1/master/machine-type-router');
var v1MachineEventRouter = require('../src/routers/v1/master/machine-event-router');
var v1MaterialConstructionRouter = require('../src/routers/v1/master/material-construction-router');
var v1FinishTypeRouter = require('../src/routers/v1/master/finish-type-router');
var v1YarnMaterialRouter = require('../src/routers/v1/master/yarn-material-router');
var v1StandardTestRouter = require('../src/routers/v1/master/standard-test-router');
var v1ColorTypeRouter = require('../src/routers/v1/master/color-type-router');
var v1ComodityRouter = require('../src/routers/v1/master/comodity-router');
var v1QualityRouter = require('../src/routers/v1/master/quality-router');
var v1AccountBankRouter = require('../src/routers/v1/master/account-bank-router');
var v1TermOfPaymentRouter = require('../src/routers/v1/master/term-of-payment-router');
var v1DesignMotiveRouter = require('../src/routers/v1/master/design-motive-router');
var v1StorageBankRouter = require('../src/routers/v1/master/storage-router');
var v1CompanyRouter = require('../src/routers/v1/master/company-router');
var v1ContactRouter = require('../src/routers/v1/master/contact-router');
var v1FPDurationEstimationRouter = require('../src/routers/v1/master/fp-duration-estimation-router');
var v1BadOutputReasonRouter = require('../src/routers/v1/master/bad-output-reason-router');
var v1DealTrackingReasonRouter = require('../src/routers/v1/master/deal-tracking-reason-router');
var v1HolidayRouter = require('../src/routers/v1/master/holiday-router');
var v1MigrationLogRouter = require('../src/routers/v1/migration-log/migration-log-router.js');
var v1SpinningYarnRouter = require('../src/routers/v1/master/spinning-yarn-router');

module.exports = function (server) {

    v1BuyerRouter().applyRoutes(server, "/v1/master/buyers");
    v1GarmentBuyerRouter().applyRoutes(server, "/v1/master/garment-buyers");
    v1SupplierRouter().applyRoutes(server, "/v1/master/suppliers");
    v1GarmentSupplierRouter().applyRoutes(server, "/v1/master/garment-suppliers");
    v1ProductByIdRouter().applyRoutes(server, "/v1/master/products/byId");
    v1ProductRouter().applyRoutes(server, "/v1/master/products");
    v1GarmentProductRouter().applyRoutes(server, "/v1/master/garment-products");
    v1UoMRouter().applyRoutes(server, "/v1/master/uoms");
    v1UnitRouter().applyRoutes(server, "/v1/master/units");
    v1CategoryRouter().applyRoutes(server, "/v1/master/categories");
    v1GarmentCategoryRouter().applyRoutes(server, "/v1/master/garment-categories");
    v1CurrencyRouter().applyRoutes(server, "/v1/master/currencies");
    v1VatRouter().applyRoutes(server, "/v1/master/vats");
    v1BudgetRouter().applyRoutes(server, "/v1/master/budgets");
    v1UnitNiRouter().applyRoutes(server, "/v1/master/divisions");
    v1MachineRouter().applyRoutes(server, "/v1/master/machines");
    v1UsterRouter().applyRoutes(server, "/v1/master/usters");
    v1SpinningProductionLotRouter().applyRoutes(server,    "/v1/master/production-lots");
    v1ThreadSpecificationRouter().applyRoutes(server, "/v1/master/thread-specifications");
    v1StepRouter().applyRoutes(server, "/v1/master/steps");
    v1InstructionRouter().applyRoutes(server, "/v1/master/instructions");
    v1UploadUomRouter().applyRoutes(server, "/v1/master/upload-uoms");
    v1UploadBuyerRouter().applyRoutes(server, "/v1/master/upload-buyers");
    v1UploadGarmentBuyerRouter().applyRoutes(server, "/v1/master/upload-garment-buyers");
    v1UploadSupplierRouter().applyRoutes(server, "/v1/master/upload-suppliers");
    v1UploadGarmentSupplierRouter().applyRoutes(server, "/v1/master/upload-garment-suppliers");
    v1UploadProductRouter().applyRoutes(server, "/v1/master/upload-products");
    v1UploadGarmentProductRouter().applyRoutes(server, "/v1/master/upload-garment-products");
    v1UploadVatRouter().applyRoutes(server, "/v1/master/upload-vats");
    v1UploadBudgetRouter().applyRoutes(server, "/v1/master/upload-budgets");
    v1UploadCurrencyRouter().applyRoutes(server, "/v1/master/upload-currencies");
    v1UploadDivisionRouter().applyRoutes(server, "/v1/master/upload-divisions");
    v1UploadCategoryRouter().applyRoutes(server, "/v1/master/upload-categories");
    v1UploadGarmentCategoryRouter().applyRoutes(server, "/v1/master/upload-garment-categories");
    v1UploadUnitRouter().applyRoutes(server, "/v1/master/upload-units");
    v1LampStandardRouter().applyRoutes(server, "/v1/master/lamp-standards");
    v1ProcessTypeRouter().applyRoutes(server, "/v1/master/process-types");
    v1OrderTypeRouter().applyRoutes(server, "/v1/master/order-types");
    v1MachineTypeRouter().applyRoutes(server, "/v1/master/machine-types");
    v1MachineEventRouter().applyRoutes(server, "/v1/master/machine-events");
    v1MaterialConstructionRouter().applyRoutes(server, "/v1/master/material-constructions");
    v1FinishTypeRouter().applyRoutes(server, "/v1/master/finish-types");
    v1YarnMaterialRouter().applyRoutes(server, "/v1/master/yarn-materials");
    v1StandardTestRouter().applyRoutes(server, "/v1/master/standard-tests");
    v1ColorTypeRouter().applyRoutes(server, "/v1/master/color-types");
    v1ComodityRouter().applyRoutes(server, "/v1/master/comodities");
    v1QualityRouter().applyRoutes(server, "/v1/master/qualities");
    v1AccountBankRouter().applyRoutes(server, "/v1/master/account-banks");
    v1TermOfPaymentRouter().applyRoutes(server, "/v1/master/term-of-payments");
    v1DesignMotiveRouter().applyRoutes(server, "/v1/master/design-motives");
    v1StorageBankRouter().applyRoutes(server, "/v1/master/storages");
    v1CompanyRouter().applyRoutes(server, "/v1/master/companies");
    v1ContactRouter().applyRoutes(server, "/v1/master/contacts");
    v1FPDurationEstimationRouter().applyRoutes(server, "/v1/master/fp-duration-estimations");
    v1BadOutputReasonRouter().applyRoutes(server, "/v1/master/bad-output-reasons");
    v1DealTrackingReasonRouter().applyRoutes(server, "/v1/master/deal-tracking-reasons");
    v1HolidayRouter().applyRoutes(server, "/v1/master/holidays");
    v1SpinningYarnRouter().applyRoutes(server, "/v1/master/spinning-yarns");

    v1PowerBiRouter().applyRoutes(server, "/v1/core/power-bi/reports");
    v1MigrationLogRouter().applyRoutes(server,"/v1/migrationLog");
};