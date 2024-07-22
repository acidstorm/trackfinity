onRecordBeforeUpdateRequest((e) => {
  try {
    if (
      e.record.originalCopy().get("status") === "AWAITING_PICKUP" &&
      e.record.get("status") === "DESPATCHED"
    ) {
      const authRecord = e.httpContext.get("authRecord");
      if (!!authRecord) {
        e.record.set("courier", authRecord.get("courier"));
      }
    }
  } catch (err) {
    console.log(err);
  }
}, "parcel");

onRecordBeforeCreateRequest((e) => {
  try {
    const authRecord = e.httpContext.get("authRecord");
    if (!!authRecord) {
      e.record.set("courier", authRecord.get("courier"));
    }
  } catch (err) {
    console.log(err);
  }
}, "tracking_event");
