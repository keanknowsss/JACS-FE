import styles from "../ProductModal.module.scss";

const UPS = ({ object, setObject, error }) => {
  return (
    <>
      <label htmlFor="manufacturer">Manufacturer: </label>
      <input
        type="text"
        id="manufacturer"
        placeholder="CyberPower"
        className={`${styles.medText} ${error.manufacturer ? styles.errorClass : null}`}
        value={object.manufacturer}
        onChange={(e) =>
          setObject({
            ...object,
            manufacturer: e.target.value
          })
        }
      />
      <label htmlFor="capacityW">Capacity (Watts): </label>
      <input
        type="number"
        id="capacityW"
        placeholder="1000"
        min={0}
        className={`${styles.smallNumber} ${error.capacityW ? styles.errorClass : null}`}
        value={object.capacityW}
        onChange={(e) =>
          setObject({
            ...object,
            capacityW: e.target.value
          })
        }
      />
      <label htmlFor="capacityVA">Capacity (VA): </label>
      <input
        type="number"
        id="capacityVA"
        placeholder="1000"
        min={0}
        className={`${styles.smallNumber} ${error.capacityVA ? styles.errorClass : null}`}
        value={object.capacityVA}
        onChange={(e) =>
          setObject({
            ...object,
            capacityVA: e.target.value
          })
        }
      />
      <label htmlFor="rackHeight">Rack Height (in): </label>
      <input
        type="number"
        id="rackHeight"
        placeholder="7"
        min={1}
        className={`${styles.smallNumber}`}
        value={object.rackHeight}
        onChange={(e) =>
          setObject({
            ...object,
            rackHeight: e.target.value
          })
        }
      />
      <label htmlFor="backupRunTimeFullLoad">Backup Runtime Full Load (minutes): </label>
      <input
        type="number"
        id="backupRunTimeFullLoad"
        placeholder="1.97"
        step={0.01}
        min={1}
        className={`${styles.smallNumber}`}
        value={object.backupRunTimeFullLoad}
        onChange={(e) =>
          setObject({
            ...object,
            backupRunTimeFullLoad: e.target.value
          })
        }
      />
      <label htmlFor="backupRunTimeHalfLoad">Backup Runtime Half Load (minutes): </label>
      <input
        type="number"
        id="backupRunTimeHalfLoad"
        placeholder="10.97"
        step={0.01}
        min={1}
        className={`${styles.smallNumber}`}
        value={object.backupRunTimeHalfLoad}
        onChange={(e) =>
          setObject({
            ...object,
            backupRunTimeHalfLoad: e.target.value
          })
        }
      />
      <label htmlFor="batteryChemistry">Battery Chemistry: </label>
      <input
        type="text"
        id="batteryChemistry"
        placeholder="Sealed Lead Acid"
        value={object.batteryChemistry}
        onChange={(e) =>
          setObject({
            ...object,
            batteryChemistry: e.target.value
          })
        }
      />
      <label htmlFor="dataLineProtection">Dataline Protection: </label>
      <input
        type="text"
        id="dataLineProtection"
        placeholder="RJ-11"
        className={styles.medText}
        value={object.dataLineProtection}
        onChange={(e) =>
          setObject({
            ...object,
            dataLineProtection: e.target.value
          })
        }
      />
      <label htmlFor="emergencyPowerOff">Emergency Power Off: </label>
      <select
        id="emergencyPowerOff"
        className={styles.smallSelect}
        value={object.emergencyPowerOff}
        onChange={(e) =>
          setObject({
            ...object,
            emergencyPowerOff: e.target.value
          })
        }
      >
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
      <label htmlFor="formFactor">Form Factor: </label>
      <input
        type="text"
        id="formFactor"
        placeholder="Tower"
        className={styles.medText}
        value={object.formFactor}
        onChange={(e) =>
          setObject({
            ...object,
            formFactor: e.target.value
          })
        }
      />
      <label htmlFor="hotSwappable">Hot Swappable: </label>
      <select
        id="hotSwappable"
        className={styles.smallSelect}
        value={object.hotSwappable}
        onChange={(e) =>
          setObject({
            ...object,
            hotSwappable: e.target.value
          })
        }
      >
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
      <label htmlFor="inputVoltage">Input Voltage (Volts AC): </label>
      <input
        type="number"
        id="inputVoltage"
        placeholder="110"
        min={1}
        className={`${styles.smallNumber}`}
        value={object.inputVoltage}
        onChange={(e) =>
          setObject({
            ...object,
            inputVoltage: e.target.value
          })
        }
      />
      <label htmlFor="maxBatteryRechargeTime">Max Battery Recharge Time (Hour/s): </label>
      <input
        type="number"
        id="maxBatteryRechargeTime"
        placeholder="8"
        min={1}
        className={`${styles.smallNumber}`}
        value={object.maxBatteryRechargeTime}
        onChange={(e) =>
          setObject({
            ...object,
            maxBatteryRechargeTime: e.target.value
          })
        }
      />
      <label htmlFor="outputVoltage">Output Voltage (Volts AC): </label>
      <input
        type="number"
        id="outputVoltage"
        placeholder="120"
        min={1}
        className={`${styles.smallNumber}`}
        value={object.outputVoltage}
        onChange={(e) =>
          setObject({
            ...object,
            outputVoltage: e.target.value
          })
        }
      />
      <label htmlFor="receptacles">Receptacles: </label>
      <input
        type="text"
        id="receptacles"
        placeholder="10 x NEMA 5-15R"
        className={styles.medText}
        value={object.receptacles}
        onChange={(e) =>
          setObject({
            ...object,
            receptacles: e.target.value
          })
        }
      />
      <label htmlFor="serialPort">Serial Port: </label>
      <select
        id="serialPort"
        className={styles.smallSelect}
        value={object.serialPort}
        onChange={(e) =>
          setObject({
            ...object,
            serialPort: e.target.value
          })
        }
      >
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
      <label htmlFor="waveformType">Waveform Type: </label>
      <input
        type="text"
        id="waveformType"
        placeholder="Sine Wave"
        className={styles.medText}
        value={object.waveformType}
        onChange={(e) =>
          setObject({
            ...object,
            waveformType: e.target.value
          })
        }
      />
      <label htmlFor="features">Features: </label>
      <textarea
        type="text"
        id="features"
        placeholder="Add Additional Features"
        rows={3}
        value={object.features}
        onChange={(e) =>
          setObject({
            ...object,
            features: e.target.value
          })
        }
      />
    </>
  );
};

export default UPS;
